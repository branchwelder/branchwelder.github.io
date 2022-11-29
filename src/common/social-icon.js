import { LitElement, html, css } from "/src/libs/lit.js";

export class SocialIcon extends LitElement {
  static properties = {
    social: {},
  };

  static get styles() {
    return css`
      #tag {
        padding: 20%;
        aspect-ratio: 1 / 1;
        cursor: var(--cursor-pointer), pointer !important;
        display: flex;
        justify-content: center;
        background-color: var(--hover);
        border: 1px solid var(--black);
      }

      path {
        fill: var(--black);
      }
      :host(:focus-within) * {
        outline: none;
      }
      :host(:focus-within) #tag {
        outline: 10px solid var(--black);
        outline-offset: -10px;
      }
      #tag:hover {
        background-color: var(--black);
        outline: 1px solid var(--hover);
        outline-offset: -10px;
      }
      #tag:hover path {
        fill: var(--hover);
      }
      #tag:active {
        filter: brightness(1.5);
      }
    `;
  }

  constructor() {
    super();
    this.social = {};
  }

  render() {
    return html`<a
      href=${this.social.url}
      target="_blank"
      rel="noreferrer noopener">
      <div
        id="tag"
        style="--hover: var(--${this.social.color})">
        ${this.social.icon}
      </div></a
    >`;
  }
}

customElements.define("social-icon", SocialIcon);
