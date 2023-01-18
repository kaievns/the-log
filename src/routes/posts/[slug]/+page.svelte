<script lang="ts">
    import type { Post } from "src/store/posts";

    export let data: any;

    $: post = data.post as Post;
</script>

{#if post}
    <h1>{post.title}</h1>
    <p>Published: {post.date.toLocaleDateString()}</p>
    {@html post.content}
{/if}
