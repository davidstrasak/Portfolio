<script lang="ts">
	import { onMount } from "svelte";

	let ref: any;
	let portal: any;

	onMount(() => {
		portal = document.createElement("div");
		portal.className = "portal";
		document.body.appendChild(portal);
		portal.appendChild(ref);
		return () => {
			document.body.removeChild(portal);
		};
	});
</script>

<div class="portal-clone">
	<div bind:this={ref}>
		<slot></slot>
	</div>
</div>

<style>
	.portal-clone {
		display: none;
	}
</style>
