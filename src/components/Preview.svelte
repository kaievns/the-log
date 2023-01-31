<script lang="ts">
    import type { Post } from "src/store/posts";
    import Date from "./Date.svelte";

    export let post: Post;
    export let showDescription = true;
</script>

<Date date={post.date} class="min-w-[100px] text-gray-500" />

<a
    href={`/posts/${post.slug}`}
    class="cactus-link inline-block line-clamp-1"
    rel="prefetch"
>
    {post.title}
</a>

{#if showDescription}
    <q class="mt-2 block italic line-clamp-3">{post.description}</q>
{/if}
