import { config } from "dotenv";
import { slug } from "../shell.js";
import { fetchPosts } from "./posts.js";

config();

const run = async () => {
  console.log(await slug());
  // console.log(await fetchPosts());
};

run();
