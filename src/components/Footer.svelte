<script lang="ts">
    const year = new Date().getFullYear();
</script>

<footer
    class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pt-20 pb-4 text-center align-top text-gray-500 sm:flex-row sm:justify-between sm:text-xs"
>
    <div class="mr-0 sm:mr-4">
        Copyright &copy; {year} Kai Evans
    </div>
    <nav
        aria-label="More on this site"
        class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"
    >
        <a
            href="/"
            class="px-4 py-2 sm:py-0 sm:px-2 sm:hover:text-textColor sm:hover:underline no-underline"
            >Home</a
        >
        <a
            href="/about"
            class="px-4 py-2 sm:py-0 sm:px-2 sm:hover:text-textColor sm:hover:underline no-underline"
            >About</a
        >
        <a
            href="/posts"
            class="px-4 py-2 sm:py-0 sm:px-2 sm:hover:text-textColor sm:hover:underline no-underline"
            >Log</a
        >
    </nav>
</footer>
