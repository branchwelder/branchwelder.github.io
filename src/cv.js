import { LitElement, html } from "lit";
import { router } from "./index";

export class CVPage extends LitElement {
  //   @property({ type: Object }) location = router.location;

  static properties = {
    location: {},
  };

  constructor() {
    super();
    this.location = router.location;
  }
  render() {
    return html`THIS IS WHERE THE CV GOES`;
  }
}

customElements.define("portfolio-cv", CVPage);
