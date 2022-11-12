import { LitElement, html } from "lit";
import { router } from "../router";

export class CVPage extends LitElement {
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
    return html`Current location URL: ${this.location.getUrl()} THIS IS WHERE
    THE CV GOES`;
  }
}

customElements.define("portfolio-cv", CVPage);
