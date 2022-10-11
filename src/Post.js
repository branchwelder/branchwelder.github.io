import { LitElement, html, css } from "lit";

export class Post extends LitElement {
  static get styles() {
    return css`
      #teaser {
        width: 100%;
        border-radius: 0.5rem;
      }
      #tags {
        display: flex;
        flex-flow: row wrap;
        gap: 0.2rem;
      }

      .tag {
        color: var(--base0);
        border-radius: 0.2rem;
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
    `;
  }

  render() {
    return html`
      <div>
        <img
          id="teaser"
          src="../assets/images/grid_painting.jpg" />
        <div id="tags">
          <span class="tag cyan">fun</span>
          <span class="tag purple">research</span>
          <span class="tag orange">theming</span>
        </div>
        <p id="description">lorem ipsum</p>
      </div>
    `;
  }
}

customElements.define("portfolio-post", Post);
