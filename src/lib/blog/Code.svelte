<script>
	export let code;
</script>

<div class="mockup-code text-info">
	{#each code as c}
		<pre data-prefix="$"><code>{c}</code></pre>
	{/each}
</div>
