import { Project } from "./schema";

import knitscapeII from "./knitscape-ii/project.json";
import weavescape from "./weavescape/project.json";
import knitscapeI from "./knitscape-i/project.json";
import dynamicToolchains from "./dynamic-toolchains/project.json";
import embroideredAudio from "./embroidered-audio/project.json";
import snippets from "./snippets/project.json";
import p5Playground from "./p5-playground/project.json";
import faviconDesigner from "./favicon-designer/project.json";
import webTechnologies from "./web-technologies/project.json";
import sliceIt from "./slice-it/project.json";
import autostereogramKnits from "./autostereogram-knits/project.json";
import wabric from "./wabric/project.json";
import bimp from "./bimp/project.json";
import rummikub from "./rummikub/project.json";
import licketySplit from "./lickety-split/project.json";
import jubilee from "./jubilee/project.json";
import plotterTwitter from "./plottertwitter/project.json";

export function resolveProjectPaths(
  project: Project,
  projectDir: string
): Project {
  return {
    ...project,
    thumbnailSrc: new URL(
      `./${projectDir}/${project.thumbnailSrc}`,
      import.meta.url
    ).href,
    headerSrc: project.headerSrc
      ? new URL(`./${projectDir}/${project.headerSrc}`, import.meta.url).href
      : undefined,
  };
}

// Import all project data and resolve paths
const projects: Project[] = [
  resolveProjectPaths(knitscapeII, "knitscape-ii"),
  resolveProjectPaths(knitscapeI, "knitscape-i"),
  resolveProjectPaths(weavescape, "weavescape"),
  resolveProjectPaths(dynamicToolchains, "dynamic-toolchains"),
  resolveProjectPaths(embroideredAudio, "embroidered-audio"),
  resolveProjectPaths(snippets, "snippets"),
  resolveProjectPaths(p5Playground, "p5-playground"),
  resolveProjectPaths(faviconDesigner, "favicon-designer"),
  resolveProjectPaths(bimp, "bimp"),
  resolveProjectPaths(wabric, "wabric"),
  resolveProjectPaths(webTechnologies, "web-technologies"),
  resolveProjectPaths(jubilee, "jubilee"),
  resolveProjectPaths(plotterTwitter, "plottertwitter"),
  resolveProjectPaths(sliceIt, "slice-it"),
  resolveProjectPaths(autostereogramKnits, "autostereogram-knits"),
  resolveProjectPaths(rummikub, "rummikub"),
  resolveProjectPaths(licketySplit, "lickety-split"),
];

export default projects;
