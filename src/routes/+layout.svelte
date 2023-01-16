<script lang="ts">
    import SkipLink from "src/components/SkipLink.svelte";
    import DarkMode from "src/components/DarkMode.svelte";
    import Header from "src/components/Header.svelte";
    import Footer from "src/components/Footer.svelte";
</script>

<DarkMode />

<div class="prose">
    <SkipLink />
    <Header />

    <main class="flex-1">
        <slot />
    </main>

    <Footer />

    <style global>
        @tailwind utilities;
        @tailwind components;
        @tailwind base;
    </style>
</div>
