import { LitElement, html, css } from "../libs/lit.js";
import { renderMarkdown } from "../renderer.js";

export class Markdown extends LitElement {
  static properties = {
    markdown: {},
  };

  static styles = css`
    #container {
      margin: 1rem 1rem 10rem 1rem;
    }
    /***********************************
          BLOCK STYLES
    ************************************/
    /* Heading 1 */
    .marked-h1 {
      font-weight: 999;
    }

    /* Heading 2 */
    .marked-h2 {
      color: var(--pink);
    }

    /* Heading 3 */
    .marked-h3 {
      color: var(--yellow);
    }

    /* Heading 4 */
    .marked-h4 {
      color: var(--green);
    }

    /* Heading 5 */
    .marked-h5 {
      color: var(--blue);
    }

    /* Heading 6 */
    .marked-h6 {
      color: var(--purple);
    }

    /* Code block */
    .marked-codeblock {
      position: relative;
    }

    /* Makes a lighter background and language label behind the codeblock. */
    .marked-codeblock::before {
      content: attr(language);
      background-color: var(--black);
      filter: brightness(1.2);
      width: calc(100% - 0.4rem);
      padding-right: 0.4rem;
      padding-top: 0.2rem;
      height: calc(100% - 0.2rem);
      position: absolute;
      z-index: -1;
      border-radius: 0.5rem;
      color: var(--pink);
      font-weight: 700;
      font-size: 0.8rem;
      text-align: right;
      font-family: "inconsolata", monospace;
      border-left: 1px solid var(--pink);
      border-right: 1px solid var(--green);
    }

    /* Paragraph */
    .marked-paragraph {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-weight: 300;
      line-height: 1.5;
    }

    /***********************************
          INLINE STYLES
      ************************************/
    /* Bold */
    .marked-strong {
      color: var(--pink);
      font-weight: 800;
    }

    /* Italic */
    .marked-emph {
      color: var(--yellow);
      font-style: italic;
    }

    /* Both bold and italic */
    .marked-strong .marked-emph {
      color: var(--pink);
    }

    /* Italic */
    .marked-codespan {
      color: var(--green);
      font-family: "inconsolata", monospace;
      position: relative;
    }

    /* Makes a lighter background and language label behind the codeblock. */
    .marked-codespan::before {
      content: "";
      background-color: var(--black);
      filter: brightness(1.2);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      border-radius: 0.5rem;
    }

    /* Strikethrough */
    .marked-strikethrough {
      text-decoration: line-through;
      font-style: italic;
      filter: brightness(0.8);
      font-weight: 100;
    }

    /* Links */
    .marked-link:link {
      color: var(--cyan);
      cursor: var(--cursor-pointer), pointer !important;
    }
    .marked-link:visited {
      color: var(--purple);
    }
    .marked-link:hover {
      color: var(--orange);
    }
    .marked-link:active {
      color: var(--yellow);
    }

    /* Images */
    .marked-image {
      width: 100%;
    }

    /***********************************
          HIGHLIGHTING ASSIGNMENTS
      ************************************/
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
    }

    .hljs-built_in,
    .hljs-selector-tag,
    .hljs-section,
    .hljs-link {
      color: var(--cyan);
    }

    .hljs-keyword {
      color: var(--pink);
    }

    .hljs,
    .hljs-subst {
      color: var(--white);
    }

    .hljs-title,
    .hljs-attr,
    .hljs-meta-keyword {
      font-style: italic;
      color: var(--green);
    }

    .hljs-string,
    .hljs-meta,
    .hljs-name,
    .hljs-type,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-tag,
    .hljs-template-variable {
      color: var(--yellow);
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-deletion {
      color: var(--blue);
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-title,
    .hljs-section,
    .hljs-doctag,
    .hljs-type,
    .hljs-name,
    .hljs-strong {
      font-weight: bold;
    }

    .hljs-literal,
    .hljs-number {
      color: var(--purple);
    }

    .hljs-emphasis {
      font-style: italic;
    }
  `;

  updated() {
    renderMarkdown(this.markdown, this.renderRoot.querySelector("#container"));
  }

  render() {
    return html`<div id="container"></div>`;
  }
}

customElements.define("x-markdown", Markdown);
