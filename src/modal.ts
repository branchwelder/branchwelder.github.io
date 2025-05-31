import { html } from "lit-html";
import { Project, ProjectLink } from "./projects/schema";

function linkButton(link: ProjectLink) {
  return html`
    <button
      onclick="window.open('${link.url}', '_blank', 'noopener,noreferrer')"
      class="bg-rose-600/20 hover:bg-rose-500/40 cursor-pointer transition-all duration-150 rounded-md px-2 py-0.5 outline  outline-slate-900 outline-offset-[-1px] text-slate-100 hover:text-white text-sm font-medium">
      ${link.text}
    </button>
  `;
}
export function Modal(project: Project, onClose: () => void) {
  return html`
    <div
      class="fixed inset-0 bg-black/30 backdrop-blur-lg z-50 flex items-center justify-center animate-fade-in"
      @click=${(e: Event) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <div
        class="animate-scale-in bg-slate-700 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto outline outline-slate-900">
        <div class="flex justify-between items-center px-4 py-2">
          <span class="text-lg font-bold leading-none">
            ${project.longTitle || project.title}
          </span>
          <button
            class="text-slate-400 hover:text-white cursor-pointer text-2xl leading-none"
            @click=${onClose}>
            &times;
          </button>
        </div>
        ${project.headerSrc
          ? html`<img
              src=${project.headerSrc}
              alt=${project.title}
              class="w-full object-cover border-t border-b border-black" />`
          : html``}
        <div class="p-4">
          <p class="text-slate-300">${project.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${project.links?.map((link) => linkButton(link))}
          </div>
        </div>
      </div>
    </div>
  `;
}
