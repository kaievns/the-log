import { config } from "dotenv";
import { fetchPosts, publishPost } from "./posts.js";

config();

const run = async () => {
  // console.log(await slug());
  const posts = await fetchPosts();

  for (const post of posts) {
    console.log(await publishPost(post));
    // console.log(await format(post.markdown));
    // console.log(await uploadImages(post));
  }
};

run();
