import { LitElement, html, css } from "/src/libs/lit.js";
import { router } from "/router.js";

import "/src/common/picture-tile.js";
import "/src/common/social-icon.js";

import layout from "/content/homepage.js";
import socials from "/content/socials.js";

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

      .sectionTitle {
        font-size: 1.5rem;
        font-weight: 999;
        margin-top: 3rem;
        margin-bottom: 0.5rem;
        padding: 0.5rem 0;
      }
      #about {
        margin-top: unset;
        user-select: none;
      }
      #socials {
        display: grid;
        height: fit-content;
        grid-template-columns: repeat(3, 1fr);
      }
      .project-grid {
        display: grid;
      }

      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #about {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .project-grid {
          grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
          font-size: 0.9rem;
        }
        #layout-container {
          margin: 1rem 1rem 10rem 1rem;
        }
        .sectionTitle {
          font-size: 1rem;
          margin-top: 2rem;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #about {
          font-size: 4rem;
          margin-bottom: 2rem;
        }
        .project-grid {
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        }

        #layout-container {
          max-width: 60rem;
          margin: 4rem 4rem 10rem 4rem;
        }
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`
      <div id="layout-container">
        <div
          class="sectionTitle"
          id="about">
          Hannah&nbsp;Twigg&#8209;Smith
        </div>
        <div class="project-grid">
          ${layout.about.map(
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
          <div id="socials">
            ${socials.map(
              (social) => html`<social-icon .social=${social}></social-icon>`
            )}
          </div>
        </div>
        <div
          id="research"
          class="sectionTitle">
          RESEARCH
        </div>
        <div class="project-grid">
          ${layout.research.map(
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
        <div
          id="projects"
          class="sectionTitle">
          PROJECTS
        </div>
        <div class="project-grid">
          ${layout.projects.map(
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
      </div>
    `;
  }
}

customElements.define("home-page", Home);
