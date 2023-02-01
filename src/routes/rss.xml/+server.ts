import { fetchAllPosts, type Post } from "src/store/posts";

export const prerender = true;

export const GET = async () => {
  const posts = await fetchAllPosts();

  const body = render(posts.slice(0, 25));
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
  };

  return new Response(
    body,
    options,
  );
};
const baseURL = "https://kaievans.co";

const render = (posts: Post[]) => (`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Kai Evans: Writes</title>
<description>Kai Evans in writing</description>
<link>${baseURL}</link>
<atom:link href="${baseURL}/rss.xml" rel="self" type="application/rss+xml"/>
${
  posts
    .map(
      (post) =>
        `<item>
<guid isPermaLink="true">${baseURL}/posts/${post.slug}</guid>
<title>${post.title}</title>
<link>${baseURL}/posts/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${post.date.toUTCString()}</pubDate>
</item>`,
    )
    .join("\n")
}
</channel>
</rss>
`);
