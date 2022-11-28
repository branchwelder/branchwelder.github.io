import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";
import "../common/markdown.js";

export class Post extends LitElement {
  static properties = {
    location: Object,
    markdown: String,
  };

  static styles = css`
    :host {
      width: 100%;
      display: block;
      display: flex;
      justify-content: center;
    }

    /* #container {
      margin: 0 1rem;
    } */

    /* Mobile mode */
    @media only screen and (max-width: 767px) {
      #container {
        width: 100%;
      }
    }
    @media only screen and (min-width: 767px) {
      #container {
        min-width: 45rem;
        max-width: 50rem;
      }
    }
  `;

  constructor() {
    super();
    this.location = router.location;
    this.markdown = "";
  }

  firstUpdated() {
    // When the path is loaded, we fetch the markdown
    fetch(`../../content/projects/${this.location.params.post}/post.md`)
      .then((response) => response.blob())
      .then((blob) => blob.text())
      .then((markdown) => {
        this.markdown = markdown;
      });
  }

  render() {
    return html`<div id="container">
      <x-markdown markdown=${this.markdown}></x-markdown>
    </div>`;
  }
}

customElements.define("twigg-post", Post);
