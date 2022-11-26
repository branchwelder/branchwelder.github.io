import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";
import "../common/markdown.js";

export class Post extends LitElement {
  static properties = {
    location: Object,
    markdown: String,
  };

  static styles = css`
    #container {
      max-width: 50rem;
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
