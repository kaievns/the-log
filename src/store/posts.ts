export const fetchAllPosts = async () => {
  const allMdFiles = import.meta.glob("/posts/**/*.md");
  const allMdxFiles = import.meta.glob("/posts/**/*.mdx");

  const iterablePostFiles = Object.entries(allMdFiles).concat(
    Object.entries(allMdxFiles),
  );

  return Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() as any;
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );
};
