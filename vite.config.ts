import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { imagetools } from "vite-imagetools";

const config: UserConfig = {
  plugins: [sveltekit(), imagetools()],
  resolve: {
    alias: {
      "src/": "/src/",
      "posts/": "/posts/",
    },
  },
  server: {
    fs: {
      allow: ["posts/"],
    },
  },
};

export default config;
