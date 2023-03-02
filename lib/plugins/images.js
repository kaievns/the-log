/**
 * This plugin adds the image optimisation queries to all the .md file images
 */
import MagicString from "magic-string";

/** @returns {import("svelte/types/compiler/preprocess").PreprocessorGroup} */
export const preprocessMarkdownImages = () => {
  return {
    async markup({ content, filename }) {
      if (!filename.match(/\/posts\/.+?\.md$/)) return { code: content };

      const s = new MagicString(content);

      const IMAGE_IMPORT_RE =
        /(\n\s*?import _Images[A-Z][a-zA-Z]+ from ")(.+?\.(jpeg|jpg|png|tiff|avif|gif|webp))(";\n)/g;

      s.replace(IMAGE_IMPORT_RE, (_, $1, $2, ext, $4) => {
        return `${$1}${$2}?w=1200&webp&withoutEnlargement${$4}`;
      });

      return {
        code: s.toString(),
        map: s.generateMap(),
      };
    },
  };
};
