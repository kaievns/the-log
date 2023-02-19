import { parse, stringify } from "yaml";
import { find, read, save } from "../shell.js";

export const loadAllPosts = async () => {
  const fileNames = await find("posts/**/*.md");
  return Promise.all(fileNames.map(loadFile));
};

export const loadFile = async (filename) => {
  const content = await read(filename);
  const [, frontmatter, ...rest] = content.split("---");
  const metatags = parse(frontmatter);
  const markdown = rest.join("---");

  return { filename, metatags, markdown };
};

export const saveFile = async (filename, metadata, content) => {
  const data = `---\n${stringify(metadata)}\n---\n${content}`;
  return save(filename, data);
};
