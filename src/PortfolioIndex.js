import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { themes } from './themes';

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
    this.theme = 'nord';
  }

  render() {
    const theme = themes[this.theme];
    return html`
      <main style=${styleMap(theme)}>
        <h1>hannah</h1>
      </main>
    `;
  }
}
