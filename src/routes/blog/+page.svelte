<script>
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "./posts";
</script>

<h1 class="text-5xl mb-5 text-center">
	<p class="inline">
		My recent <span class="text-secondary font-bold">projects</span>
	</p>
	<p class="text-xl">and the lessons learned from them.</p>
</h1>

{#each posts as post}
	<BlogPost {post} />
{/each}
