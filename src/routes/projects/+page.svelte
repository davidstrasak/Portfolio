<script lang="ts">
	import Project from "$lib/projects/Project.svelte";
	import info from "./info";
</script>

<h1 class="text-5xl font-bold mb-5 text-center">
	<p class=" inline">My recent</p>
	<strong class="inline text-secondary">projects</strong>
</h1>

<!-- Row one of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start mb-14">
	<Project project={info.automaticWindow} />
	<Project project={info.PICvariety} />
	<Project project={info.thisWebsite} />
</div>

<!-- Row two of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start">
	<Project project={info.tableRows} />
	<Project project={info.stockSS} />
	<Project project={info.arduinoVest} />
</div>
