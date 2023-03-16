import { mdsvex } from "mdsvex";
import remarkMath from "remark-math";
import rehypeFigure from "rehype-figure";

const compiler = mdsvex({
  extensions: [".md", ".mdx"],
  remarkPlugins: [
    remarkMath,
  ],
  rehypePlugins: [
    [rehypeFigure, { className: false }],
  ],
  smartypants: true,

  highlight: {
    highlighter: (code, lang) => `<pre><code>${code}</code></pre>`,
  },
});

export const format = async (markdown, filename = "file.md") => {
  const { code: html } = await compiler.markup({ content: markdown, filename });

  return html;
};
