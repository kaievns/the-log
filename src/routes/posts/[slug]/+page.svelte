<script lang="ts">
    // import "prism-themes/themes/prism-synthwave84.css";
    import "prism-themes/themes/prism-one-dark.css";
    import type { Post } from "src/store/posts";

    export let data: any;

    const content = async (path: string) => {
        const module = await import(path);
        // console.log(module.default);
    };

    $: post = data.post as Post;
    $: post && content(post.path);
</script>

{#if post}
    <h1>{post.title}</h1>
    <p>Published: {post.date.toLocaleDateString()}</p>
    {@html post.content}
{/if}
