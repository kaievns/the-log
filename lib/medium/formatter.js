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

export const format = async ({ markdown, filename = "file.md", metadata }) => {
  const content = `# ${metadata.title}\n\n${markdown}`;
  const { code: html } = await compiler.markup({ content, filename });

  return html;
};
