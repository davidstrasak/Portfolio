<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "./posts";
</script>

<svelte:head>
	<meta property="og:title" content="Systemancer - Articles" />
	<meta
		name="description"
		property="og:description"
		content="A collection of articles made for tech enthusiasts and non-developers who want to be more effective while using the PC and learn about interesting technical projects."
	/>
	<meta
		name="keywords"
		property="og:keywords"
		content="Systemancer, Blog, Articles, Systems Engineering, Engineering"
	/>
	<meta property="og:url" content={page.url.href} />
</svelte:head>

<h1 class="block text-primary text-4xl font-systemancer text-center">Recent blog posts</h1>
<a href="{base}/blog/navigation" class="text-xl text-accent underline text-center block"
	>See all blog posts here</a
>

{#each posts as post, index}
	<BlogPost {post} reverse={index % 2 === 0} />
{/each}
