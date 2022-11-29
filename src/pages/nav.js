import { router } from "../../router.js";
import { LitElement, html, css, repeat } from "../libs/lit.js";
import { getAvailableThemes, changeTheme } from "./themer.js";

import { gear } from "../assets/icons.js";

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
        justify-content: end;
        position: absolute;
        width: 100%;
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
        margin: 1rem;
        cursor: var(--cursor-pointer), pointer !important;
      }

      #settings-icon path {
        fill: var(--white);
        filter: opacity(0.3);
      }

      #settings-icon:hover path {
        filter: unset;
      }

      #settings-toggle:checked ~ #settings-icon {
        transform: rotate(-90deg);
      }

      #settings-toggle:checked ~ #settings-icon path {
        fill: var(--pink);
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
  }

  render() {
    return html`
      <div id="nav-container">
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
