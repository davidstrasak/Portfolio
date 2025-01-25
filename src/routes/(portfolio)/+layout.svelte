<script>
	import { onMount } from "svelte";

	function setCoolTheme() {
		document.documentElement.setAttribute("data-theme", "readable");
	}

	onMount(() => {
		setCoolTheme();
	});
</script>

<slot />
