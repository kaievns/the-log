export type Post = {
  url: string;
  slug: string;
  path: string;
  date: Date;
  title: string;
  content: string;
  description?: string;
  thumbnail?: { src: string; width: number; height: number };
  tags: string[];
  draft: boolean;
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

  return entries
    .filter((e) => import.meta.env.DEV || !e.draft) // hide drafts in prod
    .filter((e) => !e.path.includes("/ideas/")) // hide the ideas folder
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const moduleToPost = (module: any, path: string): Post => {
  const { metadata = {} } = module;
  const tags = (metadata.tags || []).map((t: string) => t.toLowerCase());
  const date = new Date(Date.parse(metadata.date) || new Date());
  const slug = metadata.slug || path.replace(/(^\/posts\/)|(\.md(x)?$)/g, "");
  const url = `http://kaievans.co/posts/${slug}`;

  return {
    ...metadata,
    tags,
    url,
    slug,
    date,
    path,
    get content() {
      return module.default;
    },
  };
};
