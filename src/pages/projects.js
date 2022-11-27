import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

import "../common/picture-tile.js";
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
        width: 100%;
        display: flex;
        justify-content: center;
      }
      #grid-container {
        max-width: 60rem;
      }
      #project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 1rem;
        margin: 0 1rem;
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`<div id="grid-container">
      <div id="project-grid">
        ${projects.map(
          (project) =>
            html`<picture-tile
              .title=${project.title}
              .image=${`/content/projects${project.image}`}
              .path=${`/projects${project.path}`}
              style="--hovercolor: var(--${project.color
                ? project.color
                : colors[
                    Math.floor(Math.random() * colors.length)
                  ]})"></picture-tile>`
        )}
      </div>
    </div>`;
  }
}

customElements.define("project-grid", ProjectGrid);
