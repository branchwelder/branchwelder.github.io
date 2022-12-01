import { LitElement, html, css } from "../libs/lit.js";
import { renderMarkdown, styles } from "../renderer.js";

export class Markdown extends LitElement {
  static properties = {
    markdown: {},
  };

  static styles = styles;

  updated() {
    renderMarkdown(this.markdown, this.renderRoot.querySelector("#container"));
  }

  render() {
    return html`<div id="container"></div>`;
  }
}

customElements.define("x-markdown", Markdown);
