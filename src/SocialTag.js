import { LitElement, html, css } from "lit";

export class SocialTag extends LitElement {
  static properties = {
    social: {},
  };

  static get styles() {
    return css`
      #tag {
        color: var(--base0);
        padding: 0.3rem 0.5rem;
        display: inline-flex;
        align-items: center;
        border-radius: 0.5rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
        cursor: pointer;
      }
      #tag:hover {
        background-color: var(--base4) !important;
      }
      #text {
        margin-left: 0.3rem;
      }
      path {
        fill: var(--base0);
      }
      svg {
        height: 1.5rem;
      }
    `;
  }

  constructor() {
    super();
    this.social = {};
  }

  render() {
    console.log(this.social);
    return html`<div
      id="tag"
      style="background-color: var(--${this.social.color})">
      ${this.social.icon}
      <span id="text">${this.social.service}</span>
    </div>`;
  }
}

customElements.define("social-tag", SocialTag);
