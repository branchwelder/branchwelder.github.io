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
        width: 100%;
        display: block;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`404: Something has gone horribly wrong!`;
  }
}

customElements.define("oh-no", OhNo);
