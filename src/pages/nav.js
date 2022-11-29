import { router } from "../../router.js";
import { LitElement, html, css, repeat } from "../libs/lit.js";
import { getAvailableThemes, changeTheme } from "./themer.js";

import { gear, home } from "../assets/icons.js";

const controlButton = (buttonText, buttonColor, buttonAction) => html`<button
  style="--buttonColor: var(--${buttonColor})"
  class="controlButton"
  @click=${buttonAction}>
  ${buttonText}
</button>`;

export class Nav extends LitElement {
  static properties = {
    theme: {},
    location: {},
    pageTitle: {},
  };

  static get styles() {
    return css`
      :host {
        height: 100%;
        display: block;
      }

      #nav-container {
        z-index: 100;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: end;
        position: absolute;
        width: 100%;
        height: 3rem;
        padding: 0 0.5rem;
        box-sizing: border-box;
      }

      #nav-container.showNav {
        background-color: var(--pink);
        color: var(--black);
        border-bottom: 2px solid var(--black);
        justify-content: space-between;
      }

      #nav-container.hideNav #home-button,
      #nav-container.hideNav #page-title {
        display: none;
      }

      #nav-container.showNav #home-button,
      #nav-container.showNav #page-title {
        display: flex;
      }

      #nav-container.showNav + #content {
        margin-top: 3rem;
      }

      #home-button {
        width: 2rem;
        display: flex;
        align-items: center;
        cursor: var(--cursor-pointer), pointer !important;
      }

      #page-title {
        font-weight: 800;
        filter: opacity(0.7);
      }

      /* SETTINGS TOGGLE */
      #settings-toggle {
        display: none;
      }

      #settings-icon {
        width: 2rem;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        transform: rotate(0);
        cursor: var(--cursor-pointer), pointer !important;
      }

      #home-button path,
      #settings-icon path {
        fill: var(--white);
        filter: opacity(0.3);
      }

      #home-button:hover path,
      #settings-icon:hover path {
        filter: unset;
      }

      #settings-toggle:checked ~ #settings-icon {
        transform: rotate(-90deg);
      }

      #settings-toggle:checked ~ #settings-icon path {
        fill: var(--yellow);
        filter: unset;
      }

      #settings-toggle:checked ~ #settings {
        right: 0;
      }

      /* SETTINGS PANE */
      #settings {
        position: fixed;
        z-index: -10;
        background-color: var(--black);
        outline: 2px solid var(--black);
        transition: right 250ms ease;
        width: 15rem;
        right: -16rem;
        border: 0.2rem solid var(--pink);
        margin-top: 1rem;
      }

      .controlButtonContainer {
        display: grid;
        grid-template-columns: auto auto;
      }

      .controlPanelLabel {
        font-weight: 999;
        background-color: var(--pink);
        color: var(--black);
        height: 1.5rem;
        display: flex;
        align-items: center;
      }

      .controlButton {
        background-color: unset;
        cursor: pointer;
        border: none;
        outline: 1px solid var(--buttonColor);
        color: var(--buttonColor);
        height: 2rem;
      }

      .controlButton:hover {
        background-color: var(--buttonColor);
        color: var(--black);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "blue-hour";
    this.location = router.location;
    this.pageTitle = null;
  }

  render() {
    this.pageTitle = this.location.getUrl();
    const showNav = this.pageTitle === "/" ? "hideNav" : "showNav";

    return html`
      <div
        id="nav-container"
        class=${showNav}>
        <a href="/">
          <div id="home-button">${home}</div>
        </a>
        <div id="page-title">${this.pageTitle.slice(1)}</div>
        <label for="settings-toggle">
          <input
            name="settings-toggle"
            type="checkbox"
            id="settings-toggle" />
          <div id="settings-icon">${gear}</div>
          <div id="settings">
            <div id="settingsContainer">
              <div class="controlPanelLabel"><span>PALETTES</span></div>
              <div class="controlButtonContainer">
                ${repeat(getAvailableThemes(), (rule) => {
                  const theme_name = rule.selectorText.slice(1);
                  return controlButton(theme_name, "pink", (e) => {
                    changeTheme(this.theme, theme_name);
                    this.theme = theme_name;
                  });
                })}
              </div>
            </div>
          </div>
        </label>
      </div>
      <div id="content">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("portfolio-nav", Nav);
