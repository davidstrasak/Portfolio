<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
</script>

{#key $page.url.pathname}
	<a href="{base}/blog/navigation" class="text-accent block mb-8">Go back to navigation</a>
{/key}
<slot />
