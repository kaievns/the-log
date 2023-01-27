import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: {
        plugins: [autoprefixer],
      },
    }),
    vitePreprocess(),
    mdsvex({
      extensions: [".md", ".mdx"],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
      smartypants: true,
    }),
  ],

  extensions: [".svelte", ".md", ".mdx"],

  kit: {
    adapter: adapter(),
  },
};

export default config;
