import * as api from "./api.js";
import { format } from "./formatter.js";
import { loadAllPosts } from "../posts/collect.js";

const updatePostID = async (post, id) => {
  console.log("updating post", id);
};

export const publishPost = async (post) => {
  const userID = await api.fetchUserId();
  const info = await api.post(`/users/${userID}/posts`, {
    title: post.metadata.title,
    contentFormat: "html",
    content: await format(post),
    tags: post.metadata.medium.tags,
    canonicalUrl: `https://kaievans.co/posts/${post.metadata.slug}`,
  });

  await updatePostID(post, info.id);
};

export const fetchPosts = async () => {
  const list = await loadAllPosts();
  return list.filter((p) => !!p.metadata.medium);
};
