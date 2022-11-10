import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { marked } from "marked";

import { themes } from "./themes";

import "./sidebar";
import "./paper";
import "./Post";

import papers from "../resources/papers";
import demos from "../resources/demos";

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
      }
      @media only screen and (min-width: 767px) {
        #site {
          display: flex;
          justify-content: center;
          -webkit-box-direction: normal;
          -webkit-box-orient: horizontal;
          flex-direction: row;
          min-height: 100%;
        }
        #nav {
          text-align: right;
        }
        #content {
          max-width: 60%;
          padding: 15px;
        }
        #footer {
          align-self: flex-end;
        }
      }
      #nameHeader {
        background-color: var(--purple);
        color: var(--base0);
        font-size: 2rem;
        font-weight: 999;
        font-style: italic;
        padding: 0.3rem 1rem;
        display: inline-block;
        margin: 1rem 0;
      }
      .section-title {
        /* background-color: var(--purple); */
        color: var(--base0);
        font-size: 1.5rem;
        font-weight: 999;
        font-style: italic;
        padding: 0.3rem 1rem;
        /* margin: 1rem 0; */
      }
      #nav {
        /* margin: 0;
        padding: 0;
        width: 15rem;
        background-color: var(--base2);
        position: fixed;
        height: 100%;
        overflow: auto; */
        /* background-color: var(--base3); */
        flex: 1;
      }
      #footer {
        flex: 1;
      }
      #content {
        /* margin-left: 15rem; */
        /* background-color: var(--base1); */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
      }
      .section {
        padding: 0 1rem;
      }
      .cyan {
        background-color: var(--cyan);
      }
      .purple {
        background-color: var(--purple);
      }
      .green {
        background-color: var(--green);
      }
      .pink {
        background-color: var(--pink);
      }
      .red {
        background-color: var(--red);
      }
      .blue {
        background-color: var(--blue);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "nord";
  }

  render() {
    const theme = themes[this.theme];
    // fetch("../posts/squares.md")
    //   .then((response) => response.blob())
    //   .then((blob) => blob.text())
    //   .then((markdown) => {
    //     console.log(marked.parse(markdown));
    //   });
    return html`
      <main style=${styleMap(theme)}>
        <div id="site">
          <div id="nav">
            <div id="nameHeader">hannah twigg-smith</div>
            <a href="/cv">CV</a>
            <a href="/error">error</a>
          </div>
          <div id="content">
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
            <portfolio-post></portfolio-post>
          </div>
          <div id="footer">
            <span>made by branchwelder</span>
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
