import { LitElement, html, css } from "lit";
import { router } from "../router";

export class About extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static styles = css`
    #headshot {
      width: 20rem;
    }
  `;

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`<div>
      <img id="headshot" src=${`../../content/bio/headshot.jpg`} />
    </div>`;
  }
}

customElements.define("twigg-about", About);
