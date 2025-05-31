import { html, render, TemplateResult } from "lit-html";
import { linkTiles } from "./linkTiles";
import { projectTiles } from "./projectTiles";

const bio = html`
  <div class="flex gap-1.5rem">
    <p class="font-light">
      I build creative tools, mainly for textile crafts. I am currently working
      on new CAD/CAM software for automatic knitting at
      ${textLink("https://topologic.io", "Topologic")}. In December 2024 I
      finished my PhD at the
      ${textLink("https://www.washington.edu", "University of Washington")},
      where I was advised by
      ${textLink("https://infosyncratic.nl", "Nadya Peek")} and a member of
      ${textLink("https://depts.washington.edu/machines", "Machine Agency")}. I
      previously completed my undergraduate degree in computing at
      ${textLink("https://olin.edu", "Olin College of Engineering")}. This site
      collects things I've worked on!
    </p>
  </div>
`;

export function autoFitGrid(items: TemplateResult[], size: "link" | "project") {
  const sizeClasses = {
    link: "grid-cols-[repeat(auto-fit,50px)]",
    project: "grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4",
  };
  return html`<div class="grid ${sizeClasses[size]}">
    ${items.map((item) => item)}
  </div>`;
}

export function textLink(href: string, text: string) {
  return html`<a
    class="cursor-pointer text-pink-400 hover:text-pink-300 underline decoration-pink-400/30 hover:decoration-pink-300/50 transition-colors"
    href="${href}"
    >${text}</a
  >`;
}

const header = html`<div
  class="text-2xl font-bold sticky mt-8 top-0 bg-slate-700 z-10 py-2">
  Hannah Twigg&#8209;Smith
</div> `;

function view() {
  return html`<main
    class="container mx-auto flex flex-col gap-4 p-4 max-w-screen-lg">
    ${header} ${bio} ${autoFitGrid(linkTiles(), "link")}
    ${autoFitGrid(projectTiles(), "project")}
  </main> `;
}

function r() {
  render(view(), document.body);
  window.requestAnimationFrame(r);
}

window.onload = () => {
  r();
};
