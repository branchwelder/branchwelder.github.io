import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
// import { marked } from "marked";
// fetch("../posts/squares.md")
//   .then((response) => response.blob())
//   .then((blob) => blob.text())
//   .then((markdown) => {
//     console.log(marked.parse(markdown));
//   });

import { themes } from "./themes";

import "./cv/paper";
import "./project";
import "./social";

import socials from "../resources/socials";
import projects from "../resources/projects";

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
  };

  static get styles() {
    return css`
      main {
        min-height: 100vh;
        overflow: auto;
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
      #content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 1rem;
        z-index: 0;
      }
      #socials {
        display: flex;
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
          min-height: 100%;
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
        #socials {
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
          min-height: 100%;
          overflow: auto;
        }
        #nav {
          text-align: right;
          position: -webkit-sticky; /* for Safari */
          position: sticky;
          top: 0;
          align-self: flex-start; /* <-- this is the fix */
        }
        #content {
          max-width: 60%;
          padding: 15px;
        }
        #socials {
          justify-content: end;
        }
      }
    `;
  }

  constructor() {
    super();
    this.theme = "dracula";
  }

  render() {
    const theme = themes[this.theme];
    return html`
      <main style=${styleMap(theme)}>
        <div id="site">
          <div id="nav">
            <div id="nameHeader">hannah twigg-smith</div>
            <div id="socials">
              ${socials.map(
                (social) =>
                  html`<portfolio-social .social=${social}></portfolio-social>`
              )}
            </div>
          </div>
          <div id="content">
            ${projects.map(
              (project) =>
                html`<portfolio-project
                  .project=${project}
                  style="--hovercolor: var(--${colors[
                    Math.floor(Math.random() * colors.length)
                  ]})"
                ></portfolio-project>`
            )}
          </div>
          <div id="footer">
            <!-- <span>made by branchwelder</span> -->
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("portfolio-home", Home);

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
