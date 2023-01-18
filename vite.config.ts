import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
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
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
};

export default config;
