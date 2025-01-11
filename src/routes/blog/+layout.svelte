<script>
	import { onMount } from "svelte";

	function setReadableTheme() {
		document.documentElement.setAttribute("data-theme", "dark");
	}

	onMount(() => {
		setReadableTheme();
	});
</script>

<slot />
