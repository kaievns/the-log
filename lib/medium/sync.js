import { config } from "dotenv";
import { fetchPosts, publishPost } from "./posts.js";

config();

const unpublishedPosts = async () => {
  const mediumPosts = await fetchPosts();
  const unpublished = mediumPosts.filter((p) => !p.metadata.medium.id);
  const time = (post) => new Date(post.metadata.date).getTime();
  const oldestFirst = unpublished.sort((a, b) => time(a) - time(b));

  return oldestFirst;
};

const run = async () => {
  const posts = await unpublishedPosts();

  for (const post of posts) {
    console.log("Publishing:", post.metadata.date, "-", post.metadata.title);
    await publishPost(post);
  }
};

run();
