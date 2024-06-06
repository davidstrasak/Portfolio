<script lang="ts">
	import Project from "$lib/projects/Project.svelte";
	import info from "./info.js";

	let my_modal_5: any;
</script>

<h1 class="text-5xl font-bold mb-5 text-center">
	<p class=" inline">My recent</p>
	<strong class="inline text-secondary">projects</strong>
</h1>

<!-- Row one of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-top">
	<Project project={info.arduinoVest} />
	<Project project={info.automaticWindow} />
	<Project project={info.PICvariety} />
</div>

<!-- Row two of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-top">
	<Project project={info.thisWebsite} />
	<Project project={info.tableRows} />
	<Project project={info.stockSS} />
</div>
