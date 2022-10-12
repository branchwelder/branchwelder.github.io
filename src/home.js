import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { themes } from "./themes";

import "./Post";
import "./SocialTag";

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
      #bio {
        display: flex;
      }

      #post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 0.5rem;
      }
      #portrait {
        width: 15rem;
      }
      .section {
        margin: 0 1.5rem;
      }
      .section-title {
        background-color: var(--purple);
        color: var(--base0);
        font-size: 1.5rem;
        font-weight: 999;
        font-style: italic;
        padding: 0.3rem 1rem;
        display: inline-block;
        margin: 1rem 0;
      }

      .tag {
        color: var(--base0);
        /* border-radius: 0.2rem; */
        padding: 0.2rem;
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
    return html`
      <main style=${styleMap(theme)}>
        <div class="section-title">hannah twigg-smith</div>
        <div
          id="bio"
          class="section">
          <img
            id="portrait"
            src="../assets/images/grid_painting.jpg" />
          <div>
            <p class="bio-text bio-item">
              I'm Hannah! I'm a PhD student in Human Centered Design and
              Engineering at the University of Washington.
            </p>

            <a href="/blog">Blog</a>
            <a href="/cv">CV</a>
            <!-- <a href="pages/cv.html">CHECK OUT MY CV</a>
            <a href="posts/embryoid.html">embroidery</a>
            <a href="posts/playdate.html">playdate</a> -->

            <div id="tags">
              <social-tag social="twitter"></social-tag>
              <social-tag social="instagram"></social-tag>
              <social-tag social="github"></social-tag>
              <social-tag social="scholar"></social-tag>
            </div>
          </div>
        </div>

        <div class="section-title">projects</div>
        <div
          id="post-grid"
          class="section">
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
      </main>
    `;
  }
}

customElements.define("portfolio-home", Home);
