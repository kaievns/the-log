<script lang="ts">
    import type { Post } from "src/store/posts";
    import Date from "./Date.svelte";

    export let post: Post;
</script>

<h1 class="title">{post.title}</h1>
<Date date={post.date} />

{#if post.tags && post.tags.length}
    <div class="inline before:content-['|']">
        <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-6 w-6 ml-1"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"
            />
            <path
                d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"
            />
            <path d="M6 9h-.01" />
        </svg>
        {#each post.tags as tag, i}
            <a
                class="cactus-link inline-block before:content-['#']"
                aria-label={`View more blogs with the tag ${tag}`}
                href={`/tags/${tag}`}>{tag}</a
            >{(i < post.tags.length - 1 && ", ") || ""}
        {/each}
    </div>
{/if}
