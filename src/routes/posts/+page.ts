import { fetchAllPosts } from "src/store/posts";

export const load = async () => {
  const posts = await fetchAllPosts();
  return { posts };
};
