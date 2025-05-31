import { html } from "lit-html";
import { Modal } from "./modal";

import { Project } from "./projects/schema";
import projects from "./projects";

let openModal: number | null = null;

function projectTile(project: Project, index: number) {
  const baseTileStyles = "relative group rounded-lg";

  const transitionStyles = "transition-all duration-100 ease-out";

  const baseBackgroundStyles =
    "absolute rounded-lg size-full bg-slate-700 brightness-80";
  const hoverBackgroundStyles =
    "group-hover:translate-x-[-4px] group-hover:translate-y-[4px] outline outline-1 outline-slate-900 outline-offset-[-1px]";

  const baseLinkStyles =
    "relative rounded-lg flex flex-col cursor-pointer h-full outline outline-1 outline-slate-900 outline-offset-[-1px] bg-slate-600";
  const hoverLinkStyles =
    "group-hover:translate-x-[4px] group-hover:translate-y-[-4px] group-hover:backdrop-blur-sm ";

  const baseTitleStyles =
    "flex-1 font-semibold border-t border-slate-900 flex items-center text-[0.9rem] px-[0.7rem] py-[0.4rem] ";
  const hoverTitleStyles = "group-hover:text-white";

  return html`
    <div class="${baseTileStyles}">
      <div
        class="${baseBackgroundStyles} ${hoverBackgroundStyles} ${transitionStyles}"></div>
      <div
        class="${baseLinkStyles} ${hoverLinkStyles} ${transitionStyles}"
        @click=${() => (openModal = index)}
        target="_blank"
        rel="noopener noreferrer">
        <img
          class="w-full aspect-square object-cover block rounded-t-lg"
          src="${project.thumbnailSrc}"
          alt="${project.title}" />
        <div class="${baseTitleStyles} ${hoverTitleStyles}">
          ${project.title}
        </div>
      </div>
      ${openModal === index ? Modal(project, () => (openModal = null)) : null}
    </div>
  `;
}

export function projectTiles() {
  return projects.map((project, index) => projectTile(project, index));
}
