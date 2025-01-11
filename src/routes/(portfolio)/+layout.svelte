<script>
	import { onMount } from "svelte";

	function setCoolTheme() {
		document.documentElement.setAttribute("data-theme", "darkcyberpunk");
	}

	onMount(() => {
		setCoolTheme();
	});
</script>

<slot />
