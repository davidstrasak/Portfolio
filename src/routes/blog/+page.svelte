<script lang="ts">
	import { base } from "$app/paths";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "./posts";
</script>

<h1 class="mb-5 text-center">
	<p class="block text-secondary text-5xl text-center">Recent blog posts</p>
	<a href="{base}/blog/navigation" class="text-xl text-accent">See all blog posts here</a>
</h1>

{#each posts as post}
	<BlogPost {post} />
{/each}
