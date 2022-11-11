import { Router } from "@vaadin/router";

// Import home and error pages by default
import "./pages/home";
import "./pages/projects";
import "./pages/ohno";

const routes = [
  {
    path: "/",
    component: "portfolio-home",
    children: [{ path: "/", component: "project-grid" }],
  },
  {
    path: "/cv",
    component: "twigg-cv",
    action: async () => {
      await import("./pages/cv");
    },
  },
  {
    path: "/about",
    component: "twigg-about",
    action: async () => {
      await import("./pages/about");
    },
  },
  { path: "(.*)", component: "oh-no" },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
