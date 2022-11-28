import { LitElement, html, css } from "../libs/lit.js";

export class PictureTile extends LitElement {
  static get styles() {
    return css`
      #teaser {
        width: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 1;
      }
      #root {
        border: 1px solid var(--black);
      }
      a {
        text-decoration: none;
      }
      :host {
        position: relative;
      }
      :host::before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 1px;
        transform: translate(0, 0);
        background-color: var(--hovercolor);
        filter: brightness(0.8);
      }
      #title-container {
        background-color: var(--hovercolor);
        color: var(--black);
        font-weight: 800;
        outline: 1px solid var(--black);
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        justify-content: center;
      }
      #tile-title {
        margin: 0.4rem 0.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      :host(:focus-within)::before,
      :host(:hover)::before {
        transform: translate(calc(3rem * -0.125), calc(3rem * 0.125));
      }
      #root:hover {
        transform: translate(calc(3rem * 0.125), calc(3rem * -0.125));
        cursor: var(--cursor-pointer), pointer;
      }
      #root,
      :host::before {
        transition: transform 0.05s ease-out;
      }

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #tile-title {
          margin: 0.3rem 0.5rem;
          font-size: 0.8rem;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #tile-title {
          margin: 0.4rem 0.7rem;
        }
      }
    `;
  }

  render() {
    return html`
      <div id="root">
        <a href=${`${this.path}`}>
          <img
            id="teaser"
            src=${this.image} />
          <div id="title-container">
            <div id="tile-title">${this.title}</div>
          </div>
        </a>
      </div>
    `;
  }
}
customElements.define("picture-tile", PictureTile);
