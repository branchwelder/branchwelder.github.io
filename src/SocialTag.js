import { LitElement, html, css } from "lit";
import { twitter, github, instagram, scholar } from "./icons";

const socials = {
  twitter: { icon: twitter, color: "blue" },
  github: { icon: github, color: "purple" },
  instagram: { icon: instagram, color: "red" },
  scholar: { icon: scholar, color: "green" },
};

export class SocialTag extends LitElement {
  static properties = {
    social: { type: String },
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

  render() {
    return html`<div
      id="tag"
      style="background-color: var(--${socials[this.social].color})">
      ${socials[this.social].icon}
      <span id="text">${this.social}</span>
    </div>`;
  }
}

customElements.define("social-tag", SocialTag);
