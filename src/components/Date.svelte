<script lang="ts">
    export let date: Date;
    let clazz = "";
    export { clazz as class };

    const formatOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    $: raw = date && date.toISOString();
    $: pretty = date && date.toLocaleDateString("en-AU", formatOptions);
</script>

<time datetime={raw} class={clazz}>{pretty}</time>
