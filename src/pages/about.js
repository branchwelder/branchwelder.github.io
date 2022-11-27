import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";
import "../common/markdown.js";

export class About extends LitElement {
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
    #container {
      max-width: 30rem;
      margin: 0 1rem;
    }
  `;

  constructor() {
    super();
    this.location = router.location;
    this.markdown = "";
  }

  firstUpdated() {
    // When the path is loaded, we fetch the markdown
    fetch(`../../content/about/about.md`)
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

customElements.define("twigg-about", About);
