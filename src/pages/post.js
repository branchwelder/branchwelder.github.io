import { LitElement, html, css } from "lit";
import { router } from "../router";

import { marked } from "marked";
import fm from "front-matter";

export class Post extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static get styles() {
    return css`
      /* :host {
        background-color: var(--green);
      } */
    `;
  }

  constructor() {
    super();
    this.location = router.location;
  }

  firstUpdated() {
    // Marked override renderer
    const renderer = {
      heading: this.heading,
      image: this.image,
      text: this.text,
      hr: this.hr,
      paragraph: this.paragraph,
      checkbox: this.checkbox,
      code: this.code,
    };

    marked.use({ renderer });

    // When the path is loaded, we fetch the markdown post file
    fetch(`../../content/projects/${this.location.params.post}/post.md`)
      .then((response) => response.blob())
      .then((blob) => blob.text())
      .then((markdown) => {
        this.renderRoot.querySelector("#container").innerHTML =
          marked.parse(markdown);
      });
  }

  heading(text, level) {
    return `<h${level}>${text}</h${level}>`;
  }

  image(href, title, text) {
    console.log(href);
    return "IMAGE";
  }

  text(text) {
    console.log(text);
    return text;
  }

  paragraph(text) {
    return text;
  }

  checkbox(checked) {
    return `IS IT CHECKED? ${checked}`;
  }

  code(code, infostring, escaped) {
    console.log(infostring);
    return code;
  }

  hr() {
    return "TAKE A BREAK";
  }

  render() {
    return html`<div id="container"></div>`;
  }
}

customElements.define("twigg-post", Post);
