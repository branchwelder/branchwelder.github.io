import { router } from "../../router.js";
import { LitElement, html, css, repeat } from "../libs/lit.js";
import { getAvailableThemes, changeTheme } from "./themer.js";

import "../common/social-icon.js";
import { menu, gear } from "../assets/icons.js";
import socials from "../../content/socials.js";

const controlButton = (buttonText, buttonColor, buttonAction) => html`<button
  style="--buttonColor: var(--${buttonColor})"
  class="controlButton"
  @click=${buttonAction}>
  ${buttonText}
</button>`;

export class Home extends LitElement {
  static properties = {
    theme: {},
    location: {},
    nav: {},
    settings: {},
  };

  static get styles() {
    return css`
      :host {
        height: 100%;
        display: block;
      }
      #nav {
        position: sticky;
        background-color: var(--black, black);
        z-index: 100;
        top: 0;
        color: var(--white);
        box-shadow: black 0 0 10px 0px;
        margin-bottom: 1rem;
      }

      #nav::before {
        content: "";
        background-color: var(--black);
        filter: brightness(1.3);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
      }
      #nav-main {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        align-items: center;
      }
      #nav-main a:link {
        text-decoration: none;
      }
      #nav-heading {
        display: flex;
        align-items: center;
      }
      #nav-menu {
        display: inline-block;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        transition: all 0.3s ease;
        transform: rotate(0);
        margin-right: 0.5rem;
      }

      #nav-menu svg,
      #nav-settings svg {
        margin: 0.5rem;
      }
      #nav-menu path,
      #nav-settings path {
        fill: var(--white);
      }
      #nav-menu:hover path,
      #nav-settings:hover path {
        fill: var(--purple);
      }
      #name-header {
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 800;
        font-style: italic;
        user-select: none;
        width: fit-content;
        padding-left: 1rem;
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

      #settings {
        position: relative;
        z-index: 1000;
        overflow: auto;
        background-color: var(--black);
        padding: 0.5rem;
      }

      #settings::before {
        content: "";
        background-color: var(--black);
        filter: brightness(1.3);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
      }

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #nav-content {
          padding: 0.5rem;
        }
        #links {
          font-size: 1.5rem;
        }
        #nav-buttons {
          flex-direction: column;
          align-items: center;
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
        #nav-menu {
          display: none;
        }
        #nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        #nav-buttons {
          gap: 1.5rem;
        }
        #settings {
          position: absolute;
          top: 3rem;
          z-index: 100;
          box-shadow: black 0px 5px 5px;
        }
      }
      .controlButton {
        background-color: var(--black);
        cursor: pointer;
        border: 1px solid var(--buttonColor);
        color: var(--buttonColor);
      }

      .controlButton:hover {
        background-color: var(--buttonColor);
        color: var(--black);
      }

      #nav-buttons {
        display: flex;
      }

      .controlButtonContainer {
        display: flex;
        flex-wrap: wrap;
      }

      .controlPanelLabel {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      #nav-settings {
        width: 2.5rem;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        transform: rotate(0);
      }

      #settings-button,
      #menu-button {
        display: none;
      }

      #settings-button:checked + #nav-settings,
      #menu-button:checked + #nav-menu {
        transform: rotate(90deg);
      }

      #settings-button:checked + #nav-settings path,
      #menu-button:checked + #nav-menu path {
        fill: var(--yellow);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "blue-hour";
    this.location = router.location;
    this.nav = false;
    this.settings = false;
  }

  render() {
    return html`
      <!-- The navigation bar -->
      <div id="nav">
        <div id="nav-main">
          <a href="/"
            ><div id="name-header">hannah&nbsp;twigg&#8209;smith</div>
          </a>
          <!-- <div
            id="nav-menu"
            @click=${() => (this.nav = !this.nav)}>
            ${menu}
          </div> -->
          <label for="menu-button">
            <input
              type="checkbox"
              id="menu-button" />
            <div
              id="nav-menu"
              @click=${() => (this.nav = !this.nav)}>
              ${menu}
            </div>
          </label>
        </div>

        <div
          id="nav-content"
          style="display:${this.nav ? "block" : "none"}">
          <div id="nav-buttons">
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
            <label for="settings-button">
              <input
                type="checkbox"
                id="settings-button" />
              <div
                id="nav-settings"
                @click=${() => (this.settings = !this.settings)}>
                ${gear}
              </div>
            </label>
          </div>

          <div
            id="settings"
            style="display:${this.settings ? "block" : "none"}">
            <div class="controlPanelLabel">themes</div>
            <div class="controlButtonContainer">
              ${repeat(getAvailableThemes(), (rule) => {
                const theme_name = rule.selectorText.slice(1);
                return controlButton(theme_name, "blue", (e) => {
                  changeTheme(this.theme, theme_name);
                  this.theme = theme_name;
                });
              })}
            </div>
          </div>
        </div>
      </div>
      <!-- Everything outside of the nav -->
      <div id="content">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("portfolio-home", Home);
