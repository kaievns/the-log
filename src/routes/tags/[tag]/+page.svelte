<script lang="ts">
    import Preview from "src/components/Preview.svelte";
    import type { PageData } from "../$types";

    export let data: PageData;
</script>

<h1 class="title mb-6 flex items-center">
    <a href="/tags/" class="text-accent sm:hover:underline">Tags</a>
    <span class="ml-2 mr-3 inline-block">→</span>
    <span class="text-xl">#{data.tag}</span>
</h1>
<section aria-label="Blog post list">
    <ul class="space-y-8 text-left">
        {#each data.posts as post}
            <li class="flex flex-wrap items-center gap-x-2 [&_q]:w-full">
                <Preview {post} />
            </li>
        {/each}
    </ul>
</section>
