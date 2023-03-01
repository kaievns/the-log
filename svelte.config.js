import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import remarkMath from "remark-math";
import remarkRelativeImages from "mdsvex-relative-images";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFigure from "rehype-figure";
import { preprocessMarkdownImages } from "./lib/plugins/images.js";
import { preprocessMarkdownThumbs } from "./lib/plugins/thumbs.js";

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
      remarkPlugins: [
        remarkMath,
        remarkRelativeImages,
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypeFigure, { className: false }],
      ],
      smartypants: true,
    }),
    preprocessMarkdownImages(),
    preprocessMarkdownThumbs(),
  ],

  extensions: [".svelte", ".md", ".mdx"],

  kit: {
    adapter: adapter(),
  },
};

export default config;
