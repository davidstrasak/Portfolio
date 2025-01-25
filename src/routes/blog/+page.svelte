<script lang="ts">
	import { base } from "$app/paths";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "./posts";
</script>

<h1 class="mb-5 text-center">
	<p class="block text-primary text-5xl text-center font-cyberpunk">Recent blog posts</p>
	<a href="{base}/blog/navigation" class="text-xl text-accent underline">See all blog posts here</a>
</h1>

{#each posts as post}
	<BlogPost {post} />
{/each}
