<script lang="ts">
    // import "prism-themes/themes/prism-synthwave84.css";
    import "prism-themes/themes/prism-one-dark.css";
    import HeroBlock from "src/components/HeroBlock.svelte";
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
    <!-- <BaseHead title={title} description={description} image={image} /> -->
    <!-- <div class="sm:grid sm:grid-cols-[3fr_1fr] sm:items-start sm:gap-x-10"> -->
    <!-- <BlogHero content={post} /> -->
    <!-- <aside class="hidden text-right sm:sticky sm:top-20 sm:block">
            <h2 class="font-semibold">Table of Contents</h2>
            <ul class="mt-4 space-y-2 text-xs">
                {
                    headings.map(({ slug, text }) => (
                        <li class="line-clamp-2 hover:text-accent">
                            <a href={`#${slug}`} aria-label={`Scroll to section: ${text}`}>
                                <span>&#35;</span> {text}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </aside> -->
    <!-- </div> -->

    <HeroBlock {post} />

    <div
        class="prose prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:absolute prose-headings:before:-ml-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none"
    >
        {@html post.content}
    </div>
{/if}
