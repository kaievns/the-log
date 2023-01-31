import { error } from "@sveltejs/kit";
import { fetchAllPosts } from "src/store/posts";

export const load = async ({ params }: any) => {
  const allPosts = await fetchAllPosts();
  const matchingPosts = allPosts.filter((p) =>
    p.tags && p.tags.includes(params.tag)
  );

  if (matchingPosts.length === 0) throw error(404);

  return { posts: matchingPosts, tag: params.tag };
};
