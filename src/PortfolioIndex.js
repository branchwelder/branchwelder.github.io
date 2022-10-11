import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "./themes";

export class PortfolioIndex extends LitElement {
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
      <h1>hannah twigg-smith</h1>
      <img src="public/images/grid_painting.jpg" class="portrait" width=200></a>
        <p class="bio">
          I'm Hannah! I'm a PhD student in Human Centered Design and Engineering at the University of Washington. I work in
          Nadya Peek's lab, Machine Agency. I'm work on tools for personal fabrication and automation, specifically the
          software that allows us to tell machines what we want them to do.
          <br>
        </p>
      </main>
    `;
  }
}
