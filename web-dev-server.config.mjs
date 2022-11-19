export default {
  open: "/",
  watch: true,

  /** Set appIndex to enable SPA routing */
  appIndex: "index.html",

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },
};
