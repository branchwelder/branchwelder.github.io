import { Router } from "https://unpkg.com/@vaadin/router";

// Import home and error pages by default
import "./src/pages/home.js";
import "./src/pages/projects.js";
import "./src/pages/ohno.js";

const routes = [
  {
    path: "/",
    component: "portfolio-home",
    children: [
      { path: "/", component: "project-grid" },
      {
        path: "/about",
        component: "twigg-about",
        action: async () => {
          await import("./src/pages/about.js");
        },
      },
      {
        path: "/projects/:post",
        component: "twigg-post",
        action: async () => {
          await import("./src/pages/post.js");
        },
      },
    ],
  },
  {
    path: "/cv",
    component: "twigg-cv",
    action: async () => {
      await import("./src/pages/cv.js");
    },
  },
  {
    path: "/papers/:paper",
    component: "twigg-paper",
    action: async () => {
      await import("./src/pages/paper.js");
    },
  },
  { path: "(.*)", component: "oh-no" },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
