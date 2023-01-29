<script lang="ts">
    import DarkMode from "./DarkMode.svelte";
    import Hamburger from "./Hamburger.svelte";
    import face from "src/assets/face.jpg";

    const url = { pathname: "/" }; // document.location;
</script>

<header class="group relative mb-12 flex items-center sm:pl-[4.5rem]">
    <div class="flex sm:flex-col">
        <a
            href="/"
            class="inline-flex items-center sm:relative sm:inline-block"
            aria-current={url.pathname === "/" ? "page" : false}
        >
            <img
                src={face}
                class="w-16 h-16 rounded mr-3 sm:absolute sm:left-[-4.5rem] sm:mr-0"
                alt="Kai Evans face"
            />
            <span class="text-xl font-bold sm:text-2xl">Kai Evans</span></a
        >

        <nav
            class="absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md bg-[color:var(--theme-menu-bg)] py-4 text-accent shadow backdrop-blur group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:mt-1 sm:-ml-4 sm:flex sm:flex-row sm:items-center sm:divide-x sm:divide-dotted sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none"
            aria-label="Main menu"
        >
            <a
                href="/"
                class="py-4 px-4 sm:py-0 sm:hover:underline"
                aria-current={url.pathname === "/" ? "page" : false}
                rel="prefetch">Home</a
            >
            <a
                href="/about"
                class="py-4 px-4 sm:py-0 sm:hover:underline"
                aria-current={url.pathname === "/about" ? "page" : false}
                rel="prefetch">About</a
            >
            <a
                href="/posts"
                class="py-4 px-4 sm:py-0 sm:hover:underline"
                aria-current={url.pathname.startsWith("/posts")
                    ? "page"
                    : false}
                rel="prefetch">Log</a
            >
        </nav>
    </div>
    <DarkMode />
    <Hamburger />
</header>
