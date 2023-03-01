import * as api from "./api.js";
import { format } from "./formatter.js";
import { loadAllPosts } from "../posts/collect.js";

const updatePostID = async (post, id) => {};

export const publishPost = async (post) => {
  const userID = await api.fetchUserId();
  const info = await api.post(`/users/${userID}/posts`, {
    title: post.title,
    contentFormat: "html",
    content: await format(post.content),
    tags: post.medium.tags,
    canonicalUrl: post.url,
  });
};

export const fetchPosts = async () => {
  const list = await loadAllPosts();
  return list.filter((p) => !!p.metadata.medium);
};
