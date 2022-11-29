import { LitElement, html, css } from "../libs/lit.js";

export class PictureTile extends LitElement {
  static get styles() {
    return css`
      #teaser {
        width: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 1;
        cursor: var(--cursor-pointer), pointer !important;
      }
      #root {
        position: relative;
        border: 1px solid var(--black);
        cursor: var(--cursor-pointer), pointer !important;
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
        filter: brightness(0.7);
        cursor: var(--cursor-pointer), pointer !important;
      }
      #title-container {
        background-color: var(--hovercolor);
        color: var(--black);
        font-weight: 800;
        border-top: 2px solid var(--black);
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        cursor: var(--cursor-pointer), pointer !important;
      }
      #tile-title {
        margin: 0.4rem 0.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: var(--cursor-pointer), pointer !important;
      }

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #tile-title {
          margin: 0.3rem 0.5rem;
        }
        :host(:focus-within) * {
          outline: none;
        }
        :host(:focus-within) #root {
          outline: 5px solid var(--hovercolor);
          outline-offset: -5px;
        }
        :host(:focus-within) #title-container {
          border-color: var(--hovercolor);
        }
      }

      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #tile-title {
          margin: 0.4rem 0.7rem;
        }
        :host(:focus-within)::before,
        :host(:hover)::before {
          transform: translate(calc(4rem * -0.125), calc(4rem * 0.125));
        }

        :host(:focus-within) * {
          outline: none;
        }

        :host(:focus-within) #root,
        :host(:hover) #root {
          transform: translate(calc(4rem * 0.125), calc(4rem * -0.125));
          z-index: 1000;
          box-shadow: black 0px 0px 20px;
        }
        #root,
        :host::before {
          transition: transform 0.05s ease-out, box-shadow 0.05s;
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
