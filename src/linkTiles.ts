import { html } from "lit-html";

type Link = {
  href: string;
  color: string;
  icon?: string;
  text?: string;
};

const tileColorStyles = {
  pink: "hover:bg-[var(--pink)] focus:bg-[var(--pink)] active:bg-[var(--pink)]",
  red: "hover:bg-[var(--red)] focus:bg-[var(--red)] active:bg-[var(--red)]",
  orange:
    "hover:bg-[var(--orange)] focus:bg-[var(--orange)] active:bg-[var(--orange)]",
  yellow:
    "hover:bg-[var(--yellow)] focus:bg-[var(--yellow)] active:bg-[var(--yellow)]",
  green:
    "hover:bg-[var(--green)] focus:bg-[var(--green)] active:bg-[var(--green)]",
  cyan: "hover:bg-[var(--cyan)] focus:bg-[var(--cyan)] active:bg-[var(--cyan)]",
  blue: "hover:bg-[var(--blue)] focus:bg-[var(--blue)] active:bg-[var(--blue)]",
  purple:
    "hover:bg-[var(--purple)] focus:bg-[var(--purple)] active:bg-[var(--purple)]",
};

const tileStyles = {
  base: "text-2xl font-extrabold aspect-square no-underline rounded-sm cursor-pointer flex justify-center items-center opacity-50 shadow-none transition-all duration-100",
  hover: "hover:shadow-sm hover:opacity-100 hover:text-white",
  focus: "focus:shadow-sm focus:opacity-100 focus:text-white",
  active: "active:shadow-sm active:opacity-100 active:brightness-120",
};

const tileBaseStyles = `${tileStyles.base} ${tileStyles.hover} ${tileStyles.focus} ${tileStyles.active}`;

function linkTile(href: string, text: string, color: string, icon: string) {
  return html`<a
    href="${href}"
    target="_blank"
    rel="noreferrer noopener"
    class="${tileBaseStyles} ${tileColorStyles[color]}">
    ${icon ? html`<span class="${icon}"></span>` : html`<span>${text}</span>`}
  </a>`;
}

export function linkTiles() {
  return links.map((link) =>
    linkTile(link.href, link.text || "", link.color, link.icon || "")
  );
}

const links: Link[] = [
  // {
  //   href: "https://github.com/branchwelder",
  //   color: "pink",
  //   text: "CV",
  // },
  {
    href: "https://github.com/branchwelder",
    color: "purple",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://scholar.google.com/citations?user=LHQrAqwAAAAJ&hl=en",
    color: "green",
    icon: "fa-brands fa-google-scholar",
  },
  {
    href: "mailto:htwiggsmith@gmail.com?subject=i read your website",
    color: "yellow",
    icon: "fa-solid fa-envelope",
  },
  {
    href: "https://www.linkedin.com/in/branchwelder/",
    color: "cyan",
    icon: "fa-brands fa-linkedin",
  },
];
