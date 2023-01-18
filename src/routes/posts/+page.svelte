<script lang="ts">
    import type { Post } from "src/store/posts";

    export let data;

    $: posts = data.posts as Post[];
</script>

<h1>Recent posts</h1>

{#each posts as post}
    <div>
        {post.date.toLocaleDateString()}:
        <a href="/posts/{post.slug}">{post.title}</a>
    </div>
{/each}
