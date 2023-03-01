/**
 * This thing patches the .md imports by injecting
 * the thumbnail importer thing and swapping the o/g
 * `thumbnail` property with vite's import statement thing
 */

import { parse, walk } from "svelte/compiler";
import MagicString from "magic-string";

/** @returns {import("svelte/types/compiler/preprocess").PreprocessorGroup} */
export const preprocessMarkdownThumbs = () => {
  return {
    async markup({ content, filename }) {
      if (!filename.match(/\/posts\/.+?\.md$/)) return { code: content };

      const s = new MagicString(content);
      const ast = parse(content, { filename });

      walk(ast.module, {
        enter(node) {
          if (
            !(node.type === "VariableDeclarator" && node.id.name === "metadata")
          ) return;
          for (const property of node.init.properties) {
            if (property.key.value === "thumbnail") {
              const importText =
                `import THUMBNAIL from "${property.value.value}?w=1200&h=600&metadata&withoutEnlargement";`;
              s.appendLeft(ast.module.content.start, importText);
              s.overwrite(
                property.value.start,
                property.value.end,
                "THUMBNAIL",
              );
            }
          }
        },
      });

      return {
        code: s.toString(),
        map: s.generateMap(),
      };
    },
  };
};
