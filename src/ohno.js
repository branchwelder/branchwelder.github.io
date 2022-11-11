import { LitElement, html, css } from "lit";
import { router } from "./router";

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
    return html`UH OH! NOT FOUND!`;
  }
}

customElements.define("oh-no", OhNo);
