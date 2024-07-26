<script lang="ts">
    import Preview from "src/components/Preview.svelte";
    import Socials from "src/components/Socials.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: posts = data.posts;
</script>

<section>
    <h1 class="title mb-6">Hello friend!</h1>
    <p class="mb-4">
        Hi, my name is Kai Evans. I'm an engineer, an ex-executive, and a maker of 
        random things. This is my new home where I'm trying to finally assemble 
        writings about all the facets of my work and life under one roof. 
        You might find me on socials as well:
    </p>
    <Socials />
</section>

<section aria-label="Blog post list" class="mt-16">
    <h2 class="title mb-4 text-xl">Recent Posts</h2>
    <ul class="space-y-4 sm:space-y-2">
        {#each posts as post}
            <li class="flex flex-wrap items-center gap-x-2 [&_q]:w-full">
                <Preview {post} showDescription={false} />
            </li>
        {/each}
    </ul>
</section>

<section class="mt-16">
    <h2 class="title mb-4 text-xl">Projects</h2>
    <ul class="space-y-2 sm:space-y-0">
        <li>
            <a
                href="https://post-technical.com"
                target="_blank"
                rel="noopener noreferrer"
                class="cactus-link inline-block"
                >Post Technical
            </a>:
            <p class="inline-block sm:mt-1">
                Articles about engineering management
            </p>
        </li>
        <li>
            <a
                href="https://github.com/kaievns/the-log"
                target="_blank"
                rel="noopener noreferrer"
                class="cactus-link inline-block"
                >kaievans.co
            </a>:
            <p class="inline-block sm:mt-1">The source code of this web site</p>
        </li>
        <li>
            <a
                href="https://github.com/kaievns/halmak"
                target="_blank"
                rel="noopener noreferrer"
                class="cactus-link inline-block"
                >Halmak
            </a>:
            <p class="inline-block sm:mt-1">
                The o/g AI generated keyboard layout
            </p>
        </li>
        <li>
            <a
                href="https://github.com/kaievns/zmk-config"
                target="_blank"
                rel="noopener noreferrer"
                class="cactus-link inline-block"
                >ZMK config
            </a>:
            <p class="inline-block sm:mt-1">
                My custom 40% mechanical keyboard configs
            </p>
        </li>
        <li>
            <a
                href="https://www.instagram.com/osomguitars"
                target="_blank"
                rel="noopener noreferrer"
                class="cactus-link inline-block"
                >Osom Guitars
            </a>:
            <p class="inline-block sm:mt-1">
                A photo reel of my guitar making journey
            </p>
        </li>
    </ul>
</section>
