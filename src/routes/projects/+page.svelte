<script>
	import Project from '$lib/projects/Project.svelte';
</script>

<h1 class="text-5xl font-bold mb-5 text-center">
	<p class=" inline">My recent</p>
	<strong class="inline text-secondary">projects</strong>
</h1>

<!-- Row one of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center">
	<Project />
	<Project />
	<Project />
</div>

<!-- Row two of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center">
	<Project />
	<Project />
	<Project />
</div>
