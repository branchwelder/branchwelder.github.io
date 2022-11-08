import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "./themes";

import "./sidebar";
import "./paper";

import papers from "../resources/papers";
import demos from "../resources/demos";

export class Home extends LitElement {
  static properties = {
    theme: {},
  };

  static get styles() {
    return css`
      main {
        min-height: 100vh;
        overflow: auto;
        background-color: var(--base0, black);
        color: var(--base6, white);
      }
      .section-title {
        background-color: var(--purple);
        color: var(--base0);
        font-size: 1.5rem;
        font-weight: 999;
        font-style: italic;
        padding: 0.3rem 1rem;
        /* margin: 1rem 0; */
      }
      #nav {
        margin: 0;
        padding: 0;
        width: 15rem;
        background-color: var(--base2);
        position: fixed;
        height: 100%;
        overflow: auto;
      }
      #content {
        margin-left: 15rem;
      }
      .section {
        padding: 0 1rem;
      }
      .cyan {
        background-color: var(--cyan);
      }
      .purple {
        background-color: var(--purple);
      }
      .green {
        background-color: var(--green);
      }
      .pink {
        background-color: var(--pink);
      }
      .red {
        background-color: var(--red);
      }
      .blue {
        background-color: var(--blue);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "nord";
  }

  render() {
    const theme = themes[this.theme];
    return html`
      <main style=${styleMap(theme)}>
        <side-bar id="nav"></side-bar>
        <div id="content">
          <div class="section-title cyan">full papers</div>
          <div class="section">
            ${papers.map(
              (paper) =>
                html`<portfolio-paper .paper=${paper}></portfolio-paper>`
            )}
          </div>
          <div class="section-title green">demonstrations</div>
          <div class="section">
            ${demos.map(
              (demo) => html`<portfolio-paper .paper=${demo}></portfolio-paper>`
            )}
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("portfolio-home", Home);
