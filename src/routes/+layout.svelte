<script lang="ts">
    import "src/app.css";

    import Header from "src/components/Header.svelte";
    import Footer from "src/components/Footer.svelte";
</script>

<Header />

<main>
    <article>
        <slot />
    </article>
</main>

<Footer />
