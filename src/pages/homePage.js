import { LitElement, html, css } from "../libs/lit.js";
import { router } from "/router.js";

import "/src/common/picture-tile.js";
import projects from "/content/projects.js";
import layout from "/content/homepage.js";

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

export class Home extends LitElement {
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

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
          gap: 0.5rem;
          margin: 0.5rem;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 1rem;
          margin: 1rem;
        }
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`<div id="grid-container">
      <div class="project-grid">
        ${layout.about.cards.map(
          (about) =>
            html`<picture-tile
              .title=${about.title}
              .image=${about.image}
              .path=${about.path}
              style="--hovercolor: var(--${about.color
                ? about.color
                : colors[
                    Math.floor(Math.random() * colors.length)
                  ]})"></picture-tile>`
        )}
      </div>
      <div class="project-grid">
        ${layout.research.cards.map(
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
      <div class="project-grid">
        ${layout.toolchains.cards.map(
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
      <div class="project-grid">
        ${layout.other.cards.map(
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

customElements.define("home-page", Home);
