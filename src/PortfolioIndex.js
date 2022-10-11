import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "./themes";
import "./Post";

export class PortfolioIndex extends LitElement {
  static properties = {
    theme: {},
  };

  static get styles() {
    return css`
      main {
        min-height: 100vh;
        overflow: auto;
        padding: 1.5rem;
        background-color: var(--base0, black);
        color: var(--base6, white);
      }
      #post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 0.5rem;
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
        <h1 id="header">hannah twigg-smith</h1>
        <div id="bio">
          <img
            src="../assets/images/grid_painting.jpg"
            class="img-tile bio-item"
            width="200" />
          <p class="bio-text bio-item">
            I'm Hannah! I'm a PhD student in Human Centered Design and
            Engineering at the University of Washington.
          </p>
        </div>
        <h2>projects</h2>
        <div id="post-grid">
          <portfolio-post></portfolio-post>
          <portfolio-post></portfolio-post>
          <portfolio-post></portfolio-post>
          <portfolio-post></portfolio-post>
        </div>
      </main>
    `;
  }
}
