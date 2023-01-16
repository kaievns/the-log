<script lang="ts">
    import { i } from "vitest/dist/index-5aad25c1";

    let prevUrl: any;
    let nextUrl: any;
</script>

{#if prevUrl || nextUrl}
    <nav class="flex items-center gap-x-4">
        {#if prevUrl}
            <a
                class="mr-auto py-2 sm:hover:text-accent"
                href={prevUrl.url}
                rel="prefetch"
            >
                {#if prevUrl.srLabel}<span class="sr-only"
                        >{prevUrl.srLabel}</span
                    >{/if}
                {prevUrl.text ? prevUrl.text : "Previous"}
            </a>
        {/if}
        {#if nextUrl}
            <a
                class="ml-auto py-2 sm:hover:text-accent"
                href={nextUrl.url}
                rel="prefetch"
            >
                {#if nextUrl.srLabel}<span class="sr-only"
                        >{nextUrl.srLabel}</span
                    >{/if}
                {nextUrl.text ? nextUrl.text : "Next"}
            </a>
        {/if}
    </nav>
{/if}
