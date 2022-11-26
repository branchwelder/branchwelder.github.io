import { router } from "../../router.js";
import { LitElement, html, css, styleMap } from "../libs/lit.js";

import { themes } from "../assets/themes.js";

import "../common/social-icon.js";
import socials from "../../content/socials.js";

export class Home extends LitElement {
  static properties = {
    theme: {},
    location: {},
    nav: {},
  };

  static get styles() {
    return css`
      #nav {
        overflow: hidden;
        position: sticky;
        background-color: var(--black, black);
        z-index: 100;
        top: 0;
        color: var(--white);
      }
      #navbar {
        display: flex;
        justify-content: space-between;
        height: 2rem;
        align-items: center;
      }
      #navbar a:link {
        text-decoration: none;
      }
      #nav-icon {
        background: var(--blue);
        display: inline-block;
        height: 100%;
        aspect-ratio: 1/1;
        cursor: var(--cursor-pointer), pointer;
      }
      #nav-icon:hover {
        background-color: var(--purple);
      }
      #name-header {
        font-size: 1.2rem;
        text-decoration: none;
        font-weight: 800;
        font-style: italic;
        cursor: var(--cursor-pointer), pointer;
        user-select: none;
        width: fit-content;
        padding-left: 0.3rem;
        color: var(--white);
      }
      #name-header:hover {
        color: var(--yellow);
      }

      #socials,
      #links {
        display: flex;
        align-items: center;
      }

      #links a:link {
        text-decoration: none;
        padding: 0.2rem;
        color: var(--white);
        cursor: var(--cursor-pointer), pointer;
      }

      #links a:visited {
        color: var(--purple);
        text-decoration: none;
      }

      #links a:hover {
        color: var(--yellow);
        text-decoration: underline;
      }

      #links a:active {
        color: var(--green);
        text-decoration: underline;
      }

      #content {
        position: relative;
        z-index: 0;
        display: flex;
        margin: 0.5rem 1rem;
        justify-content: center;
      }

      #content-container {
        width: 60rem;
      }

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #nav-content {
          display: none;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          gap: 1rem;
        }
        #links {
          font-size: 1.5rem;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #nav-content {
          display: flex !important;
          flex-direction: row;
          gap: 2rem;
          margin-right: 1rem;
        }
        #nav-icon {
          display: none;
        }
        #nav {
          display: flex;
          justify-content: space-between;
        }
      }
    `;
  }

  constructor() {
    super();
    this.theme = "nord";
    this.location = router.location;
    this.nav = false;
  }

  render() {
    return html`
      <!-- The navigation bar -->
      <div id="nav">
        <div id="navbar">
          <a href="/"
            ><div id="name-header">hannah&nbsp;twigg&#8209;smith</div>
          </a>
          <div id="nav-icon" @click=${() => (this.nav = !this.nav)}></div>
        </div>
        <div id="nav-content" style="display:${this.nav ? "flex" : "none"}">
          <div id="links">
            <a href="/about"><span class="link">about</span></a>
            /
            <a href="/cv"><span class="link">cv</span></a>
          </div>
          <div id="socials">
            ${socials.map(
              (social) => html`<social-icon .social=${social}></social-icon>`
            )}
          </div>
        </div>
      </div>
      <!-- Everything outside of the nav -->
      <div id="content" style=${styleMap(themes[this.theme])}>
        <div id="content-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("portfolio-home", Home);
