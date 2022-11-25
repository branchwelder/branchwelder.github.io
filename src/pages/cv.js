import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

export class CV extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static styles = css`
    #cv {
      width: 100%;
      height: 100vh;
    }
  `;

  constructor() {
    super();
    this.location = router.location;
  }

  render() {
    return html`<embed
      id="cv"
      src="../../content/twigg_smith_cv.pdf"
      type="application/pdf"
    />`;
  }
}

customElements.define("twigg-cv", CV);
