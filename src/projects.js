import { LitElement, html, css } from "lit";
import "./Post";

class Projects extends LitElement {
  static styles = css`
    #post-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
      gap: 0.5rem;
    }
  `;
  render() {
    return html` <div
      id="post-grid"
      class="section">
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
      <portfolio-post></portfolio-post>
    </div>`;
  }
}

customElements.define("portfolio-projects", Projects);
