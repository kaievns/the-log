import { config } from "dotenv";
import { fetchPosts } from "./posts.js";

config();

const run = async () => {
  console.log(await fetchPosts());
};

run();
