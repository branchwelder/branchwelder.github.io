import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";

const commonjs = fromRollup(rollupCommonjs);

export default {
  open: "/",
  watch: true,

  /** Set appIndex to enable SPA routing */
  appIndex: "index.html",

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },

  /** List the commonjs packages that need to be transformed */
  // plugins: [commonjs()],
};
