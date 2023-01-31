import { fetchAllPosts } from "src/store/posts";

export const load = async () => {
  const posts = await fetchAllPosts();
  const tags = [...new Set(posts.flatMap((p) => p.tags || []))].sort();
  const counts = tags.map((tag) => [
    tag,
    posts.reduce(
      (count, post) => post.tags && post.tags.includes(tag) ? count + 1 : count,
      0,
    ),
  ]);
  return { tags, counts };
};
