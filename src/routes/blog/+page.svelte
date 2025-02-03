<script lang="ts">
	import { base } from "$app/paths";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "./posts";
</script>

<h1 class="block text-primary text-4xl font-systemancer text-center">Recent blog posts</h1>
<a href="{base}/blog/navigation" class="text-xl text-accent underline text-center"
	>See all blog posts here</a
>

{#each posts as post, index}
	<BlogPost {post} reverse={index % 2 === 0} />
{/each}
