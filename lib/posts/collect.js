import { parse } from "yaml";
import { cat, find } from "../shell.js";

export const loadAllPosts = async () => {
  const fileNames = await find("posts/**/*.md");
  return Promise.all(fileNames.map(loadFile));
};

export const loadFile = async (filename) => {
  const content = await cat(filename);
  const [, frontmatter, ...rest] = content.split("---");
  const metatags = parse(frontmatter);
  const markdown = rest.join("---");

  return { filename, metatags, markdown };
};
