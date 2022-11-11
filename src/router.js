import { Router } from "@vaadin/router";

import "./home";
import "./ohno";

const routes = [
  {
    path: "/",
    component: "portfolio-home",
  },
  {
    path: "/cv",
    component: "portfolio-cv",
    action: async () => {
      await import("./cv/cv");
    },
  },
  { path: "(.*)", component: "oh-no" },
  // {
  //   path: "blog",
  //   component: "portfolio-blog",
  //   action: async () => {
  //     await import("./blog");
  //   },
  //   children: [
  //     {
  //       path: "",
  //       redirect: "/blog/posts",
  //     },
  //     {
  //       path: "posts",
  //       component: "all-posts",
  //       action: async () => {
  //         await import("./allposts");
  //       },
  //     },
  //     {
  //       path: "posts/:id",
  //       component: "blog-post",
  //       action: async () => {
  //         await import("./blogpost");
  //       },
  //     },
  //   ],
  // },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
