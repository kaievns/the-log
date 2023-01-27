<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: posts = data.posts;
</script>

<h1>Recent posts</h1>

{#each posts as post}
    <div>
        {post.date.toLocaleDateString()}:
        <a href="/posts/{post.slug}">{post.title}</a>
    </div>
{/each}
