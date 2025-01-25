<script>
	import { onMount } from "svelte";

	function setReadableTheme() {
		document.documentElement.setAttribute("data-theme", "readable");
	}

	onMount(() => {
		setReadableTheme();
	});
</script>

<div class="font-readable text-xl text-left">
	<slot />
</div>
