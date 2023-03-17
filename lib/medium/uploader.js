import * as path from "path";
import { upload } from "./api.js";

export const uploadImages = async (post) => {
  let { filename, content, metadata: { thumbnail, ...metadata } } = post;

  if (thumbnail) thumbnail = await uploadImage(filename, thumbnail);

  return { filename, content, metadata: { ...metadata, thumbnail } };
};

const uploadImage = async (basename, filename) => {
  const dirname = path.dirname(basename);
  const fullname = path.join(dirname, filename);

  const response = await upload(fullname);

  return response.data.url;
};
