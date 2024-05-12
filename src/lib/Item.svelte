<script lang="ts">
	export let showContent: boolean = true;
</script>

{#if showContent}
	<div>
		<!-- Render content when showContent is true -->
		<h1>This is the true content</h1>
		<p>Some additional text...</p>
	</div>
{:else}
	<div>
		<!-- Render content when showContent is false -->
		<h1>This is the false content</h1>
		<p>Some other text...</p>
	</div>
{/if}
