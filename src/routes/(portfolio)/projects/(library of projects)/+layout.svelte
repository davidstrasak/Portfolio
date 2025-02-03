<script lang="ts">
	import { page } from "$app/state";
	import { base } from "$app/paths";
</script>

{#key page.url.pathname}
	<a href={`${base}/projects`} class="text-accent block mb-8 text-center underline">
		Go back to the projects library
	</a>
{/key}

<slot />
