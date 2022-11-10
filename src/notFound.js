import { LitElement, html } from "lit";
import { router } from "./index";

export class NotFound extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`UH OH! NOT FOUND!`;
  }
}

customElements.define("portfolio-not-found", NotFound);
