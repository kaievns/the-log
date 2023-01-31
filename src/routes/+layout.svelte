<script lang="ts">
    import "src/app.css";

    import Header from "src/components/Header.svelte";
    import Footer from "src/components/Footer.svelte";
</script>

<Header />

<main
    class="prose prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:absolute prose-headings:before:-ml-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none"
>
    <article>
        <slot />
    </article>
</main>

<Footer />
