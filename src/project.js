import { LitElement, html, css } from "lit";

export class Project extends LitElement {
  static properties = {
    project: {},
  };

  static get styles() {
    return css`
      #teaser {
        width: 100%;
        display: block;
      }
      #root {
        border: 1px solid var(--base0);
      }
      :host {
        position: relative;
      }
      :host::before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 1px;
        transform: translate(0, 0);
        background-color: var(--blue);
      }
      :host(:focus-within)::before,
      :host(:hover)::before {
        transform: translate(calc(2rem * -0.125), calc(2rem * 0.125));
      }
      #root:hover {
        transform: translate(calc(2rem * 0.125), calc(2rem * -0.125));
        cursor: var(--cursor-pointer), pointer;
      }
      #root,
      :host::before {
        transition: transform 0.05s ease-out;
      }
    `;
  }

  constructor() {
    super();
    this.project = {};
  }

  render() {
    return html`
      <div id="root">
        <img
          id="teaser"
          src="../assets/images/grid_painting.jpg"
          src=${`..${this.project.url}/teaser.jpg`}
        />
      </div>
    `;
  }
}
customElements.define("portfolio-project", Project);

// <!-- <div id="post-title">interesting title</div> -->
// <!-- <h3>playdate interactive art toy</h3> -->
// <!-- <div id="tags">
// <span class="tag cyan">fun</span>
// <span class="tag purple">research</span>
// <span class="tag pink">theming</span>
// </div> -->
// <!-- <h3>playdate!</h3> -->
// <!-- <div id="description">
// Incidunt qui cupiditate rerum qui odit error accusamus. Quia libero a
// aut iste deleniti voluptates non cumque. Et sed et quis totam
// aspernatur.
// </div> -->

// #post-title {
//   padding: 0.5rem;
//   font-size: larger;
//   font-weight: bolder;
// }
// #description {
//   padding: 0.5rem;
//   color: var(--base4);
//   font-weight: 300;
// }
// #tags {
//   display: flex;
//   flex-flow: row wrap;
//   /* gap: 0.2rem; */
// }

// #post-container {
//   background-color: var(--base2);
//   /* border-radius: 0.5rem; */
// }
