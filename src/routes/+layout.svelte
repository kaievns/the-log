<script lang="ts">
    import "src/app.css";

    import SkipLink from "src/components/SkipLink.svelte";
    import DarkMode from "src/components/DarkMode.svelte";
    import Header from "src/components/Header.svelte";
    import Footer from "src/components/Footer.svelte";
</script>

<DarkMode />

<SkipLink />
<Header />

<main class="flex-1">
    <slot />
</main>

<Footer />
