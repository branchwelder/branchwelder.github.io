import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import html from "@web/rollup-plugin-html";
import { terser } from "rollup-plugin-terser";
import { generateSW } from "rollup-plugin-workbox";

var path = require("path");

export default {
  // input: "index.html",
  output: {
    entryFileNames: "[hash].js",
    chunkFileNames: "[hash].js",
    assetFileNames: "[hash][extname]",
    format: "es",
    dir: "dist",
  },
  preserveEntrySignatures: false,

  plugins: [
    // Copy everything in the public and content folders to dist
    copy({
      targets: [
        { src: "public", dest: "dist" },
        { src: "content", dest: "dist" },
      ],
    }),

    // Enable using HTML as rollup entrypoint
    html({
      input: "index.html",
      minify: true,
      injectServiceWorker: true,
      serviceWorkerPath: "dist/sw.js",
    }),

    // html({ input: "pages/cv.html", flattenOutput: false }),
    // html({ input: "posts/*.html", flattenOutput: false }),

    /** Resolve bare module imports */
    nodeResolve(),

    /** Minify JS */
    terser(),

    /** Compile JS to a lower language target */
    babel({
      babelHelpers: "bundled",
      presets: [
        [
          require.resolve("@babel/preset-env"),
          {
            targets: [
              "last 3 Chrome major versions",
              "last 3 Firefox major versions",
              "last 3 Edge major versions",
              "last 3 Safari major versions",
            ],
            modules: false,
            bugfixes: true,
          },
        ],
      ],
      plugins: [
        [
          require.resolve("babel-plugin-template-html-minifier"),
          {
            modules: { lit: ["html", { name: "css", encapsulation: "style" }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),

    // Create and inject a service worker
    generateSW({
      navigateFallback: "/index.html",
      // where to output the generated sw
      swDest: path.join("dist", "sw.js"),
      // directory to match patterns against to be precached
      globDirectory: path.join("dist"),
      // cache any html js and css by default
      globPatterns: ["**/*.{html,js,css,webmanifest}"],
      skipWaiting: true,
      clientsClaim: true,
    }),
  ],
};
