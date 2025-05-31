export interface ProjectLink {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  thumbnailSrc: string;
  headerSrc?: string;
  longTitle?: string;
  description: string;
  links: ProjectLink[];
}
