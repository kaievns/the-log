<script lang="ts">
    import Header from "./Header.svelte";
</script>

<div class="prose">
    <Header />

    <main>
        <slot />
    </main>

    <footer>Hello, I'm the footer.</footer>

    <style global>
        @tailwind utilities;
        @tailwind components;
        @tailwind base;
    </style>
</div>
