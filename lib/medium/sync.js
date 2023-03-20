import { config } from "dotenv";
import {
  fetchPosts,
  publishPost,
  relinkPosts,
  unpublishedPosts,
} from "./posts.js";

config();

const run = async () => {
  const posts = await fetchPosts();
  const relinked = relinkPosts(posts);
  const unpublished = unpublishedPosts(relinked);

  for (const post of unpublished) {
    console.log("Publishing:", post.metadata.date, "-", post.metadata.title);
    await publishPost(post);
  }
};

run();
