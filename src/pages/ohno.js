import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

export class OhNo extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static get styles() {
    return css`
      :host {
        background-color: var(--base0);
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    console.log("something is horribly wrong");
    return html`Something is horribly wrong`;
  }
}

customElements.define("oh-no", OhNo);
