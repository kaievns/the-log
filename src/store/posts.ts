export type Post = {
  slug: string;
  path: string;
  date: Date;
  title: string;
  content: string;
  description?: string;
  tags?: string[];
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const allMdFiles = import.meta.glob("/posts/**/*.md");
  const allMdxFiles = import.meta.glob("/posts/**/*.mdx");

  const iterablePostFiles = Object.entries(allMdFiles).concat(
    Object.entries(allMdxFiles),
  );

  const entries = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      return moduleToPost(await resolver(), path);
    }),
  );

  return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const moduleToPost = (module: any, path: string): Post => {
  const { metadata } = module;
  const date = new Date(Date.parse(metadata.date));
  const slug = path.replace(/(^\/posts\/)|(\.md(x)?$)/g, "");

  // const content = module.default.render().html;

  return {
    ...metadata,
    slug,
    date,
    path,
    get content() {
      return module.default;
      // const render = module.default.render;
      // return render && render().html;
    },
  };
};
