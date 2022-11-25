import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

export class Paper extends LitElement {
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
    console.log(this.location.params);
    return html`<embed
      id="cv"
      src="../content/papers/${this.location.params.paper}.pdf"
      type="application/pdf"
    />`;
  }
}

customElements.define("twigg-paper", Paper);
