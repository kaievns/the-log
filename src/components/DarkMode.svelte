<script lang="ts">
    import { onMount } from "svelte";

    let button: HTMLButtonElement;

    const setTheme = (theme: "dark" | "light") => {
        const html = document.documentElement;

        if (theme == "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);

        button.setAttribute("aria-pressed", String(theme === "dark"));
    };

    const toggleTheme = () => {
        const dark = document.documentElement.classList.contains("dark");
        setTheme(dark ? "light" : "dark");
    };

    onMount(() => {
        const darkMode = document.documentElement.classList.contains("dark");
        button.setAttribute("aria-pressed", String(darkMode));
    });
</script>

<button
    type="button"
    class="group relative ml-auto h-9 w-9 rounded-md bg-zinc-200 p-2 ring-zinc-400 transition-all hover:ring-2 dark:bg-zinc-700"
    aria-label="Toggle Dark Mode"
    on:click={toggleTheme}
    bind:this={button}
>
    <svg
        id="sun-svg"
        class="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all group-aria-pressed:scale-100 group-aria-pressed:opacity-100"
        aria-hidden="true"
        focusable="false"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M22 12L23 12"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M12 2V1"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M12 23V22"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M20 20L19 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M20 4L19 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 20L5 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 4L5 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1 12L2 12"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
    <svg
        id="moon-svg"
        class="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all group-aria-[pressed=false]:scale-100 group-aria-[pressed=false]:opacity-100"
        aria-hidden="true"
        focusable="false"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="1.5"
        />
        <path
            d="M7.63262 3.06689C8.98567 3.35733 9.99999 4.56025 9.99999 6.00007C9.99999 7.65693 8.65685 9.00007 6.99999 9.00007C5.4512 9.00007 4.17653 7.82641 4.01685 6.31997"
            stroke="currentColor"
            stroke-width="1.5"
        />
        <path
            d="M22 13.0505C21.3647 12.4022 20.4793 12 19.5 12C17.567 12 16 13.567 16 15.5C16 17.2632 17.3039 18.7219 19 18.9646"
            stroke="currentColor"
            stroke-width="1.5"
        />
        <path
            d="M14.5 8.51L14.51 8.49889"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</button>
