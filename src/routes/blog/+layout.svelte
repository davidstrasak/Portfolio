<script>
	import { onMount } from "svelte";

	function setReadableTheme() {
		document.documentElement.setAttribute("data-theme", "forest");
	}

	onMount(() => {
		setReadableTheme();
	});
</script>

<slot />
