import { LitElement, html, css } from "lit";

class Paper extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
      }
      #teaser {
        width: 10rem;
        margin-right: 1rem;
      }
      #title {
        font-weight: 700;
        font-size: 1.2rem;
      }
      #authors {
        font-style: italic;
        font-weight: 300;
      }
      #year {
        font-weight: 900;
      }
      #paper {
        display: flex;
      }
      .tag {
        color: var(--base0);
        padding: 0.3rem 0.5rem;
        display: inline-flex;
        align-items: center;
        border-radius: 0.5rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
        cursor: pointer;
      }
      .tag:hover {
        background-color: var(--base4) !important;
      }
      #links {
        margin-top: 0.5rem;
      }
      path {
        fill: var(--base0);
      }
      svg {
        height: 1.5rem;
      }
    `;
  }
  formatAuthors() {
    let authors = this.paper.authors;

    if (authors.length === 1) {
      return html`<span>${authors[0]}</span>`;
    } else if (authors.length === 2) {
      return html`<span>${authors[0]}</span> and <span>${authors[1]}</span>`;
    } else {
      let authorHTML = [];
      for (const author of this.paper.authors.slice(0, -1)) {
        authorHTML.push(html`<span>${author}</span>, `);
      }
      authorHTML.push(html`and <span>${authors[authors.length - 1]}</span>`);
      return authorHTML;
    }
  }
  render() {
    return html`<div id="paper">
      <img
        id="teaser"
        src="../assets/images/grid_painting.jpg" />
      <div id="content">
        <div id="title">${this.paper.title}</div>
        <div id="authors">${this.formatAuthors()}</div>
        <div id="venue">${this.paper.venue} ${this.paper.year}</div>
        <div id="links">
          <div
            class="tag"
            style="background-color: var(--cyan)">
            <span class="tagText">PDF</span>
          </div>
          <div
            class="tag"
            style="background-color: var(--green)">
            <span class="tagText">HTML</span>
          </div>
          <div
            class="tag"
            style="background-color: var(--pink)">
            <span class="tagText">DOI</span>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("portfolio-paper", Paper);
