<script>
	import { base } from "$app/paths";
	import { page } from "$app/state";
</script>

{#key page.url.pathname}
	<a href="{base}/blog" class="btn btn-ghost text-accent text-xl underline m-0"
		>Go back to all posts</a
	>
{/key}

<div class="text-xl">
	<slot />
</div>
