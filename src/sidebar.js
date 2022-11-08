import { LitElement, html, css } from "lit";

import socials from "../resources/socials";
import blurbs from "../resources/blurbs";
// import pics from "../resources/pics";

import "./SocialTag";

class SideBar extends LitElement {
  static styles = css`
    #portrait {
      width: 15rem;
    }
    #bio {
      padding: 0 0.5rem;
    }
    #nameHeader {
      background-color: var(--purple);
      color: var(--base0);
      font-size: 2rem;
      font-weight: 999;
      font-style: italic;
      padding: 0.3rem 1rem;
      display: inline-block;
      margin: 1rem 0;
    }
    #socialContainer {
      display: grid;
      padding: 0.2rem;
    }
  `;

  render() {
    return html`<div id="sidebar">
      <div id="nameHeader">hannah twigg-smith</div>
      <img
        id="portrait"
        src="../assets/images/hannah_grad.jpg" />
      <p id="bio">${blurbs.bio}</p>
      <div id="socialContainer">
        ${socials.map(
          (social) => html`<social-tag .social=${social}>asdf</social-tag>`
        )}
      </div>
    </div>`;
  }
}

customElements.define("side-bar", SideBar);
