import * as path from "path";
import { upload } from "./api.js";

export const uploadImages = async (post) => {
  let { filename, markdown, metadata: { thumbnail, ...metadata } } = post;

  let match;
  let images = [];

  while (match = markdown.match(/(\n\!\[.*?\]\()(\.\/.+?)(\)\n)/)) {
    const [whole, start, path, end] = match;
    const newUrl = await uploadImage(filename, path);

    markdown = markdown.replace(whole, `${start}${newUrl}${end}`);
    images.push(newUrl);
  }

  if (thumbnail) {
    thumbnail = await uploadImage(filename, thumbnail);
    markdown = `![](${thumbnail})\n\n${markdown}`;
  }

  return { filename, markdown, metadata: { ...metadata, thumbnail } };
};

const uploadImage = async (basename, filename) => {
  const dirname = path.dirname(basename);
  const fullname = path.join(dirname, filename);
  console.log("  - uploading image:", fullname);

  const response = await upload(fullname);

  return response.data.url;
};
