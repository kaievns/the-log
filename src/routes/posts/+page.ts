import { fetchAllPosts } from "src/store/posts";

export const load = async () => {
  const posts = await fetchAllPosts();
  const tags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  return { posts, tags };
};
