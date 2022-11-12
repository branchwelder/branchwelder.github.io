import { router } from "../router";
import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "../assets/themes";

import "../common/social-icon";
import socials from "../../content/socials";

export class Home extends LitElement {
  static properties = {
    theme: {},
    location: {},
  };

  static get styles() {
    return css`
      #main {
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        background-color: var(--black, black);
        color: var(--white, white);
        display: flex;
      }
      #nav {
        padding: 1rem;
        width: fit-content;
        height: fit-content;
        position: sticky;
        top: 0;
        display: flex;
      }
      #content {
        position: relative;
        z-index: 0;
        display: inline-block;
        padding: 1rem;
      }
      #nameHeader {
        color: var(--white);
        font-size: 2rem;
        font-weight: 999;
        font-style: italic;
        cursor: var(--cursor-pointer), pointer;
        user-select: none;
        width: fit-content;
      }
      #nameHeader:hover {
        color: var(--yellow);
      }
      #socials {
        display: flex;
      }
      #links {
        display: flex;
      }
      .link {
        color: var(--white);
        outline: 1px solid var(--white);
        padding: 0.2rem;
        cursor: var(--cursor-pointer), pointer;
      }
      .link:hover {
        background-color: var(--green);
        color: var(--black);
      }
      a {
        text-decoration: none;
      }
      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #main {
          flex-direction: column;
        }
        #nav {
          text-align: left;
          z-index: 10;
          background: var(--black);
          width: auto;
          flex-direction: row;
          width: auto;
          align-items: center;
          justify-content: space-between;
        }
        #socials,
        #links {
          justify-content: center;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #main {
          flex-direction: row;
        }
        #nav {
          gap: 1rem;
          text-align: right;
          flex-direction: column;
        }
        #socials,
        #links {
          justify-content: end;
        }
      }
    `;
  }

  constructor() {
    super();
    this.theme = "nord";
    this.location = router.location;
  }

  render() {
    return html`
      <div id="main" style=${styleMap(themes[this.theme])}>
        <div id="nav">
          <a href="/"
            ><div id="nameHeader">hannah<br />twigg&#8209;smith</div>
          </a>
          <div id="links">
            <a href="/cv"><span class="link">CV</span></a>
            <a href="/about"><span class="link">about</span></a>
          </div>
          <div id="socials">
            ${socials.map(
              (social) => html`<social-icon .social=${social}></social-icon>`
            )}
          </div>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("portfolio-home", Home);
