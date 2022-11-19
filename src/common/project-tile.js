import { LitElement, html, css } from "lit";

export class ProjectTile extends LitElement {
  static properties = {
    project: {},
  };

  static get styles() {
    return css`
      #teaser {
        width: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 1;
      }
      #root {
        border: 1px solid var(--black);
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
        background-color: var(--hovercolor);
      }
      :host(:focus-within)::before,
      :host(:hover)::before {
        transform: translate(calc(3rem * -0.125), calc(3rem * 0.125));
      }
      #root:hover {
        transform: translate(calc(3rem * 0.125), calc(3rem * -0.125));
        cursor: var(--cursor-pointer), pointer;
      }
      #root,
      :host::before {
        transition: transform 0.05s ease-out;
      }
    `;
  }

  render() {
    return html`
      <div id="root">
        <a href=${`projects/${this.project}`}>
          <img
            id="teaser"
            src=${`../content/projects/${this.project}/teaser.jpg`} />
        </a>
      </div>
    `;
  }
}
customElements.define("project-tile", ProjectTile);
