import { LitElement, html, css } from "lit";
import { router } from "../router";

import "../common/project-tile";
import projects from "../../content/projects";

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
        z-index: 0;
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
          style="--hovercolor: var(--${
            colors[Math.floor(Math.random() * colors.length)]
          })"
        ></project-tile></div>`
      )}
    </div>`;
  }
}

customElements.define("project-grid", ProjectGrid);
