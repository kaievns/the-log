import * as api from "./api.js";
import { format } from "./formatter.js";
import { loadAllPosts, saveFile } from "../posts/collect.js";
import { uploadImages } from "./uploader.js";

export const publishPost = async (post) => {
  const userID = await api.fetchUserId();
  const { data: info } = await api.post(`/users/${userID}/posts`, {
    title: post.metadata.title,
    contentFormat: "html", // "markdown"
    content: await format(await uploadImages(post)),
    tags: post.metadata.medium.tags,
    canonicalUrl: `https://kaievans.co/posts/${post.metadata.slug}`,
    publishStatus: "draft",
  });

  await updatePostID(post, info.id);
};

export const fetchPosts = async () => {
  const list = await loadAllPosts();
  return list.filter((p) => !!p.metadata.medium);
};

const updatePostID = async (post, id) => {
  const { filename, markdown, metadata } = post;
  metadata.medium.id = id;
  await saveFile(filename, metadata, markdown);
};
