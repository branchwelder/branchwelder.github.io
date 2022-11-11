import { router } from "../router";
import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "../assets/themes";

import "../common/social-icon";
import socials from "../../content/socials";

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

export class Home extends LitElement {
  static properties = {
    theme: {},
    location: {},
  };

  static get styles() {
    return css`
      #main {
        height: 100%;
        position: absolute;
        background-color: var(--base0, black);
        color: var(--base6, white);
      }
      #nameHeader {
        color: var(--base6);
        font-size: 2rem;
        font-weight: 999;
        font-style: italic;
        margin-bottom: 1rem;
      }
      #nav {
        flex: 1;
        padding: 1rem;
      }
      #footer {
        flex: 1;
        padding: 1rem;
      }
      #site {
        position: relative;
        background-color: var(--base0);
        z-index: 0;
      }
      #socials {
        display: flex;
        margin-top: 1rem;
      }
      /* Mobile mode */
      @media only screen and (max-width: 767px) {
        #site {
          display: flex;
          -webkit-box-direction: normal;
          -webkit-box-orient: vertical;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
        }
        #nav {
          text-align: center;
        }
        #content {
          max-width: 100%;
          padding-right: 8%;
          padding-left: 8%;
        }
        #footer {
          text-align: center;
        }
        #socials,
        #links {
          justify-content: center;
        }
      }
      /* Desktop mode */
      @media only screen and (min-width: 767px) {
        #site {
          display: flex;
          justify-content: center;
          -webkit-box-direction: normal;
          -webkit-box-orient: horizontal;
          flex-direction: row;
          overflow: auto;
          height: 100%;
        }
        #nav {
          text-align: right;
        }
        #content {
          max-width: 60%;
          padding: 1rem;
        }
        #socials,
        #links {
          justify-content: end;
        }
      }

      #links {
        display: flex;
      }

      .link {
        color: var(--base6);
        outline: 1px solid var(--base6);
        padding: 0.2rem;
        cursor: var(--cursor-pointer), pointer;
      }

      .link:hover {
        background-color: var(--green);
        color: var(--base0);
      }

      a {
        text-decoration: none;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "nord";
    this.location = router.location;
  }

  render() {
    return html`
      <div id="main" style=${styleMap(themes[this.theme])}>
        <div id="site">
          <div id="nav">
            <div id="nameHeader">hannah twigg-smith</div>
            <div id="links">
              <a href="/cv"><span class="link">CV</span></a>
              <a href="/about"><span class="link">about</span></a>
            </div>
            <div id="socials">
              ${socials.map(
                (social) => html`<social-icon .social=${social}></social-icon>`
              )}
            </div>
          </div>
          <div id="content">
            <slot></slot>
          </div>
          <div id="footer"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("portfolio-home", Home);

// ${projects.map(
//   (project) =>
//     html`<project-tile
//       .project=${project}
//       style="--hovercolor: var(--${colors[
//         Math.floor(Math.random() * colors.length)
//       ]})"
//     ></project-tile>`
// )}

// import { marked } from "marked";
// fetch("../posts/squares.md")
//   .then((response) => response.blob())
//   .then((blob) => blob.text())
//   .then((markdown) => {
//     console.log(marked.parse(markdown));
//   });

//   <side-bar id="nav"></side-bar>
//   <div class="section-title purple">recently...</div>
//   <div class="section">
//     Here are some things I'm up to right now
//     <ul>
//       <li>going to SCF and UIST 2022</li>
//       <li>playing around with the Playdate</li>
//       <li>hanging out with my cat, Jaskier</li>
//     </ul>
//   </div>
//   <div class="section-title cyan">full papers</div>
//   <div class="section">
//     ${papers.map(
//       (paper) =>
//         html`<portfolio-paper .paper=${paper}></portfolio-paper>`
//     )}
//   </div>
//   <div class="section-title green">demonstrations</div>
//   <div class="section">
//     ${demos.map(
//       (demo) =>
//         html`<portfolio-paper .paper=${demo}></portfolio-paper>`
//     )}
//   </div>

// .cyan {
//   background-color: var(--cyan);
// }
// .purple {
//   background-color: var(--purple);
// }
// .green {
//   background-color: var(--green);
// }
// .pink {
//   background-color: var(--pink);
// }
// .red {
//   background-color: var(--red);
// }
// .blue {
//   background-color: var(--blue);
// }

/* margin: 0;
        padding: 0;
        width: 15rem;
        background-color: var(--base2);
        position: fixed;
        height: 100%;
        overflow: auto; */
/* background-color: var(--base3); */

// .section-title {
//   color: var(--base0);
//   font-size: 1.5rem;
//   font-weight: 999;
//   font-style: italic;
//   padding: 0.3rem 1rem;
// }
