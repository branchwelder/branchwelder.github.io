import { LitElement, html, css } from "lit";

export class Post extends LitElement {
  static get styles() {
    return css`
      #post-container {
        background-color: var(--base2);
        /* border-radius: 0.5rem; */
      }
      #teaser {
        width: 100%;
        display: block;
      }
      #post-title {
        padding: 0.5rem;
        font-size: larger;
        font-weight: bolder;
      }
      #description {
        padding: 0.5rem;
        color: var(--base4);
        font-weight: 300;
      }
      #tags {
        display: flex;
        flex-flow: row wrap;
        /* gap: 0.2rem; */
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
      .orange {
        background-color: var(--orange);
      }
      .pink {
        background-color: var(--pink);
      }
    `;
  }

  render() {
    return html`
      <div id="post-container">
        <!-- <div id="post-title">interesting title</div> -->
        <!-- <h3>playdate interactive art toy</h3> -->
        <img
          id="teaser"
          src="../assets/images/grid_painting.jpg" />
        <!-- <div id="tags">
          <span class="tag cyan">fun</span>
          <span class="tag purple">research</span>
          <span class="tag pink">theming</span>
        </div> -->
        <!-- <h3>playdate!</h3> -->
        <!-- <div id="description">
          Incidunt qui cupiditate rerum qui odit error accusamus. Quia libero a
          aut iste deleniti voluptates non cumque. Et sed et quis totam
          aspernatur.
        </div> -->
      </div>
    `;
  }
}

customElements.define("portfolio-post", Post);
