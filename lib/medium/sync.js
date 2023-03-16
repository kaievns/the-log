import { config } from "dotenv";
import { slug } from "../shell.js";
import { fetchPosts } from "./posts.js";
import { format } from "./formatter.js";

config();

const run = async () => {
  // console.log(await slug());
  const posts = await fetchPosts();

  for (const post of posts) {
    console.log(await format(post.markdown));
  }
};

run();
