import { LitElement, html, css } from "lit";

export class SocialIcon extends LitElement {
  static properties = {
    social: {},
  };

  static get styles() {
    return css`
      #tag {
        height: 2rem;
        width: 2rem;
        align-items: center;
        cursor: var(--cursor-pointer), pointer !important;
        display: flex;
        justify-content: center;
      }
      path {
        fill: var(--hover);
      }
      svg {
        width: 1.5rem;
      }
      a {
        display: contents;
      }
      a:hover {
        cursor: var(--cursor-pointer), pointer !important;
      }
      #tag:hover {
        background-color: var(--hover);
      }
      #tag:hover path {
        fill: var(--base0);
      }
    `;
  }

  constructor() {
    super();
    this.social = {};
  }

  render() {
    return html`<a href=${this.social.url} title=${this.social.service}>
      <div id="tag" style="--hover: var(--${this.social.color})">
        ${this.social.icon}
      </div></a
    >`;
  }
}

customElements.define("social-icon", SocialIcon);
