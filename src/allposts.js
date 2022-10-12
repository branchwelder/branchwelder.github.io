import { LitElement, html } from "lit";

export class AllPosts extends LitElement {
  render() {
    return html`all blog posts?<slot></slot> `;
  }
}

customElements.define("all-posts", AllPosts);
