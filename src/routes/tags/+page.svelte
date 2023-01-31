<script lang="ts">
    import type { PageData } from "../$types";

    export let data: PageData;
</script>

<h1 class="title mb-6">Tags</h1>
<ul class="space-y-4">
    {#each data.counts as [tag, count]}
        <li class="flex items-center gap-x-2">
            <a
                class="cactus-link inline-block"
                href={`/tags/${tag}`}
                title={`View posts with the tag: ${tag}`}
                rel="prefetch"
            >
                &#35;{tag}
            </a>
            <span class="inline-block">
                - {count} Post{(count > 1 && "s") || ""}
            </span>
        </li>
    {/each}
</ul>
