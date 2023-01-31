<script lang="ts">
    import Preview from "src/components/Preview.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: posts = data.posts;
    $: tags = data.tags;
</script>

<h1 class="title mb-6">Posts</h1>
<div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8">
    <section aria-label="Blog post list">
        <ul class="space-y-8 text-left">
            {#each posts as post}
                <li class="flex flex-wrap items-center gap-x-2 [&_q]:w-full">
                    <Preview {post} />
                </li>
            {/each}
        </ul>
    </section>
    <aside>
        <h2 class="mb-4 flex items-center text-lg font-semibold">
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
            Tags
        </h2>
        <ul class="flex flex-wrap gap-2 text-bgColor">
            {#each tags as tag}
                <li>
                    <a
                        class="flex items-center justify-center rounded-lg bg-accent p-1"
                        href={`/tags/${tag}`}
                        aria-label={`View all posts with the tag: ${tag}`}
                    >
                        #{tag}
                    </a>
                </li>
            {/each}
        </ul>
        <span class="mt-4 block sm:text-right">
            <a
                class="sm:hover:text-accent"
                href="/tags"
                aria-label="View all blog categories"
            >
                View all →
            </a>
        </span>
    </aside>
</div>
