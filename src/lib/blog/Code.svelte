<script>
	export let code;
</script>

<!-- legacy module that I won't need to use anymore if I use the markdown to html converter -->
<div class="mockup-code text-info">
	{#each code as c}
		<pre data-prefix="$"><code>{c}</code></pre>
	{/each}
</div>
