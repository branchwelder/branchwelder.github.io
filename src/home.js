import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "./themes";

import "./Post";
import "./sidebar";

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
      #post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 0.5rem;
      }
      .section {
        margin: 0 1.5rem;
      }
      .section-title {
        background-color: var(--purple);
        color: var(--base0);
        font-size: 1.5rem;
        font-weight: 999;
        font-style: italic;
        padding: 0.3rem 1rem;
        display: inline-block;
        margin: 1rem 0;
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
        padding: 0 1rem;
        /* height: 100%; */
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
          <div class="section-title">projects</div>
          <div
            id="post-grid"
            class="section">
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("portfolio-home", Home);

/* .cyan {
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
      } */
