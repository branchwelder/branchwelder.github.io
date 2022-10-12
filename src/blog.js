import { LitElement, html } from "lit";

export class Blog extends LitElement {
  render() {
    return html`This is the blog page`;
  }
}

customElements.define("portfolio-blog", Blog);
