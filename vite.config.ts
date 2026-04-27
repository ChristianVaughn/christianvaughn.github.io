import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

export default defineConfig({
  plugins: [svelte()],
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        loadPaths: [
          path.resolve("node_modules"),
          path.resolve("src/styles"),
        ],
        silenceDeprecations: [
          "color-functions",
          "import",
          "global-builtin",
          "mixed-decls",
          "if-function",
          "slash-div",
          "abs-percent",
        ],
        quietDeps: true,
      },
    },
  },
});
