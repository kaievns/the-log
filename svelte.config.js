import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import postcss from "./postcss.config.cjs";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
    }),
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),
  },

  css: {
    postcss,
  },
};

export default config;
