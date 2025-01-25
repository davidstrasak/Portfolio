<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	function setCoolTheme() {
		document.documentElement.setAttribute("data-theme", "readable");
	}

	onMount(() => {
		setCoolTheme();
	});
</script>

<noscript> Please enable JavaScript to view the this page. </noscript>

<!-- This is the landing page -->
<br />
<div class="whitespace-normal h-fit">
	<div class="border-solid border-2 border-primary p-2">
		<img
			src="{base}/systemancer.svg"
			alt="systemancer icon"
			class="h-16 mr-7"
			style="float: left;"
		/>
		<strong class="font-cyberpunk text-primary">Systemancer</strong>
		<p class="italic text-lg">/sis-tuh-man-ser/</p>

		<p class="italic text-lg">noun</p>
		<p class="text-2xl mx-8 text-left md:text-justify">
			A determined and passionate engineer and tech enthusiast who likes to solve problems to help
			people around. Sometimes in <span class="text-secondary">progressive or alternative ways</span
			>, but all the times <span class="text-secondary">effective</span>.
		</p>
		<br />
	</div>
</div>
