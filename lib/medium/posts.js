import * as api from "./api.js";
import { format } from "./formatter.js";
import { loadAllPosts, loadFile, saveFile } from "../posts/collect.js";
import { uploadImages } from "./uploader.js";

export const publishPost = async (post) => {
  const userID = await api.fetchUserId();
  const publicationID = await api.fetchPublicationID(userID);

  const { data: info } = await api.post(
    `/publications/${publicationID}/posts`,
    {
      title: post.metadata.title,
      contentFormat: "html", // "markdown"
      content: await format(await uploadImages(post)),
      tags: post.metadata.medium.tags,
      canonicalUrl: `https://kaievans.co/posts/${post.metadata.slug}`,
      publishStatus: "draft",
    },
  );

  await updatePostID(post, info.id);
};

export const fetchPosts = async () => {
  const list = await loadAllPosts();
  return list.filter((p) => !!p.metadata.medium);
};

const updatePostID = async (post, id) => {
  const { filename, metadata } = post;
  const { markdown } = await loadFile(filename);

  metadata.medium.id = id;

  await saveFile(filename, metadata, markdown);
};

export const unpublishedPosts = (posts) => {
  const unpublished = posts.filter((p) => !p.metadata.medium.id);
  const time = (post) => new Date(post.metadata.date).getTime();
  const oldestFirst = unpublished.sort((a, b) => time(a) - time(b));

  return oldestFirst;
};

const findMediumID = (posts, slug) => {
  const post = posts.find((p) => p.metadata.slug === slug);
  return post?.metadata.medium.id;
};

export const relinkPosts = (posts) =>
  posts.map((post) => {
    const { filename, metadata, markdown } = post;

    const relinked = markdown.replace(
      /(\[.+?\]\()\/posts\/(.+?)(\))/ig,
      (match, start, slug, end) => {
        const mediumID = findMediumID(posts, slug);
        if (mediumID) {
          return `${start}https://medium.com/p/${mediumID}${end}`;
        }

        return match;
      },
    );

    return { filename, metadata, markdown: relinked };
  });
