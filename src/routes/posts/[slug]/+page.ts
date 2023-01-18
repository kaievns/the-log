import { fetchAllPosts } from "src/store/posts";

export const load = async ({ params }: any) => {
  const posts = await fetchAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  return { post };
};
