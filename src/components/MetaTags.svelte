<script lang="ts">
    import type { Post } from "src/store/posts";
    import face from "src/assets/face.jpg?w=800&h=600&metadata";

    export let post: Post;

    $: author = "Kai Evans";
    $: title = `${post.title} ⁍ ${author}`;
    $: description = post.description;
    $: url = post.url;
    $: thumb = post.thumbnail || face;
    $: imageSrc = thumb.src;
    $: imageWidth = Math.round(thumb.width);
    $: imageHeight = Math.round(thumb.height);
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content={`${author} in writing`} />

    <meta property="og:image" content={imageSrc} />
    <meta property="og:image:width" content={imageWidth.toString()} />
    <meta property="og:image:height" content={imageHeight.toString()} />

    <meta property="article:author" content={author} />
    <meta property="article:published_time" content={post.date.toISOString()} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />

    <meta property="twitter:image" content={imageSrc} />
</svelte:head>
