<script lang="ts">
    import Preview from "src/components/Preview.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: posts = data.posts;
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
</div>
