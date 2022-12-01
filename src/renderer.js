import { css } from "/src/libs/lit.js";
// This is where I customize the functions that the marked.js renderer calls

/***********************************
              HEADINGS
************************************/
function heading(text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

  return String.raw`<h${level} class="marked-h${level}">
    <a
      name="${escapedText}"
      class="anchor"
      href="#${escapedText}">
      <span class="header-link"></span> </a
    >${text}
  </h${level}>`;
}

/***********************************
            CODE BLOCK
************************************/
// Uses the escape map to sanitize html-containing strings
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeForHTML(input) {
  return input.replace(/([&<>'"])/g, (char) => escapeMap[char]);
}

function code(code, options) {
  const language = options;
  const validLang = !!(language && hljs.getLanguage(language));

  const highlighted = validLang
    ? hljs.highlight(language, code).value
    : escapeForHTML(code);
  return String.raw`
    <div class="marked-codeblock" language=${language}>
      <pre><code class="hljs ${language}">${highlighted}</code></pre>
    </div>`;
}

/***********************************
            PARAGRAPH
************************************/
function paragraph(text) {
  return String.raw`<p class="marked-paragraph">${text}</p>`;
}

/***********************************
              BREAK
************************************/
function br() {
  return String.raw`<br/>`;
}

/***********************************
              STRONG
************************************/
function strong(text) {
  return String.raw`<span class="marked-strong">${text}</span>`;
}

/***********************************
              EMPH
************************************/
function em(text) {
  return String.raw`<span class="marked-emph">${text}</span>`;
}

/***********************************
            CODESPAN
************************************/
function codespan(code) {
  return String.raw`<span class="marked-codespan">${code}</span>`;
}

/***********************************
          STRIKETHROUGH
************************************/
function del(text) {
  return String.raw`<span class="marked-strikethrough">${text}</span>`;
}

/***********************************
              LINK
************************************/
function link(href, title, text) {
  return String.raw`<a href=${href} title=${title} class="marked-link"><span >${text}</span></a>`;
}

/***********************************
              IMAGE
************************************/
function image(href, title, text) {
  if (href === null) {
    return text;
  }
  let out = String.raw`<img class="marked-image" src="${href}" alt=${
    text ? text : ""
  }>`;
  if (text) {
    out += String.raw`<p class="marked-image-caption">${text}</p>`;
  }
  return out;
}

/***********************************
              RENDERER
************************************/
const renderer = {
  heading,
  code,
  paragraph,
  br,
  strong,
  em,
  codespan,
  del,
  link,
  image,
};

// Set the marked renderer to my custom renderer
marked.use({ renderer });

export const renderMarkdown = (markdown, element) => {
  element.innerHTML = marked.parse(markdown);
};

export const styles = css`
  #container {
    margin: 1rem 1rem 10rem 1rem;
  }
  /***********************************
      BLOCK STYLES
************************************/
  /* Heading 1 */
  .marked-h1 {
    font-weight: 999;
    margin-top: 3rem;
  }

  /* Heading 2 */
  .marked-h2 {
    font-weight: 999;
    margin-top: 3rem;
    /* color: var(--yellow); */
  }

  /* Heading 3 */
  .marked-h3 {
    font-weight: 999;
    /* color: var(--pink); */
  }

  /* Heading 4 */
  .marked-h4 {
    /* color: var(--green); */
  }

  /* Heading 5 */
  .marked-h5 {
    /* color: var(--blue); */
  }

  /* Heading 6 */
  .marked-h6 {
    /* color: var(--purple); */
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
    max-height: 20rem;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }

  .marked-image-caption {
    text-align: center;
    margin-bottom: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--yellow);
    font-style: italic;
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
