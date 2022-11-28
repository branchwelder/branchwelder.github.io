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
        box-shadow: black 0 0 0.5rem 0px;
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
      #nav-buttons {
        display: flex;
      }
      #nav-menu svg,
      #settings-icon svg {
        margin: 0.5rem;
      }
      #nav-menu path,
      #settings-icon path {
        fill: var(--white);
      }
      #nav-menu:hover path,
      #settings-icon:hover path {
        fill: var(--purple);
      }

      /* NAME HEADER */
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

      /* NAVIGATION LINKS */
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

      /* MENU BUTTON (SHOWN IN MOBILE MODE) */
      #menu-button {
        display: none;
      }

      #menu-button:checked + #nav-menu {
        transform: rotate(90deg);
      }

      #menu-button:checked + #nav-menu path {
        fill: var(--yellow);
      }

      /* SETTINGS TOGGLE */

      #settings-icon {
        width: 2.5rem;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        transform: rotate(0);
      }

      #settings-toggle {
        display: none;
      }

      #settings-toggle:checked ~ #settings-icon {
        transform: rotate(90deg);
      }

      #settings-toggle:checked ~ #settings-icon path {
        fill: var(--yellow);
      }

      /* SETTINGS PANE */
      #settings {
        padding: 0.5rem;
        position: absolute;
        z-index: -10;
        box-shadow: black 0 0 0 0px;
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
      .controlButtonContainer {
        display: flex;
        flex-wrap: wrap;
      }
      .controlPanelLabel {
        font-weight: bold;
        margin-bottom: 0.5rem;
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
        #settings {
          transition: top 250ms ease, box-shadow 250ms;
          top: 0;
          left: 0;
          width: calc(100% - 1rem);
          padding-top: 0;
        }
        #settings-toggle:checked ~ #settings {
          top: 100%;
          box-shadow: black 0 0 0.5rem 0px;
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
          transition: right 250ms ease, box-shadow 250ms;
          width: 15rem;
          top: calc(100% + 1.5rem);
          right: -16rem;
        }
        #settings-toggle:checked ~ #settings {
          right: 0;
          box-shadow: black 0 0 0.5rem 0px;
        }
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

            <label for="settings-toggle">
              <input
                name="settings-toggle"
                type="checkbox"
                id="settings-toggle" />
              <div id="settings-icon">${gear}</div>

              <div id="settings">
                <div id="settingsContainer">
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
            </label>
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
