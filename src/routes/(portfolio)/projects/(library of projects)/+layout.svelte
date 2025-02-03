<script lang="ts">
	import { page } from "$app/state";
	import { base } from "$app/paths";
</script>

{#key page.url.pathname}
	<a href="{base}/projects" class="btn btn-ghost text-accent text-xl underline m-0"
		>Go back to all projects</a
	>
{/key}

<div class="text-xl">
	<slot />
</div>
