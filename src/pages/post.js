import { LitElement, html, css } from "../libs/lit.js";
import { router } from "../../router.js";

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export class Post extends LitElement {
  static get properties() {
    return {
      location: Object,
    };
  }

  static get styles() {
    return css`
      h1 {
        margin-top: 0;
      }
      .italicText {
        color: var(--pink);
        font-style: italic;
      }
      .boldText {
        color: var(--yellow);
        font-weight: 900;
      }
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
      em: this.em,
      strong: this.strong,
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
    return `<img src=${href} alt="${text}" width="100%" />`;
  }

  escapeForHTML(input) {
    return input.replace(/([&<>'"])/g, (char) => escapeMap[char]);
  }

  code(code, infostring, escaped) {
    return `<pre><code>${code}</code></pre>`;
  }

  em(text) {
    return `<span class="italicText">${text}</span>`;
  }

  strong(text) {
    return `<span class="boldText">${text}</span>`;
  }

  render() {
    return html`<div id="container"></div>`;
  }
}

customElements.define("twigg-post", Post);
