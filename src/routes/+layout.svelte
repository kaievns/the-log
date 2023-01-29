<script lang="ts">
    import "src/app.css";

    import SkipLink from "src/components/SkipLink.svelte";
    import Header from "src/components/Header.svelte";
    import Footer from "src/components/Footer.svelte";
</script>

<SkipLink />
<Header />

<main class="prose">
    <slot />
</main>

<Footer />
