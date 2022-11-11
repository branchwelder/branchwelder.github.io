import { LitElement, html, css } from "lit";

export class SocialTag extends LitElement {
  static properties = {
    social: {},
  };

  static get styles() {
    return css`
      #tag {
        height: 2rem;
        width: 2rem;
        color: var(--base0);
        align-items: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 0.2rem;
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
        width: 1.5rem;
      }
    `;
  }

  constructor() {
    super();
    this.social = {};
  }

  render() {
    return html`<div
      id="tag"
      style="background-color: var(--${this.social.color})">
      ${this.social.icon}
      <!-- <span id="text">${this.social.service}</span> -->
    </div>`;
  }
}

customElements.define("social-tag", SocialTag);
