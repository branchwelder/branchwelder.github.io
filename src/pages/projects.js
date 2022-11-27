import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

import "../common/project-tile.js";
import projects from "../../content/projects.js";

const colors = [
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "purple",
];

export class ProjectGrid extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static get styles() {
    return css`
      :host {
        max-width: 1000px;
        display: block;
      }
      #project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 1rem;
        margin: 1rem;
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`<div id="project-grid">
      ${projects.map(
        (project) =>
          html`<project-tile
            .project=${project}
            style="--hovercolor: var(--${colors[
              Math.floor(Math.random() * colors.length)
            ]})"></project-tile>`
      )}
    </div>`;
  }
}

customElements.define("project-grid", ProjectGrid);
