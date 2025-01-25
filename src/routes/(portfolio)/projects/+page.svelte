<script lang="ts">
	import Project from "$lib/projectStructure/Project.svelte";
	import info from "./info";
</script>

<h1 class="text-5xl mb-5 text-center">
	<p class="inline text-5xl text-primary font-cyberpunk">My recent projects</p>
	<p class="text-3xl text-center font-cyberpunk mb-[5%]">... and the lessons learned from them</p>
</h1>

<!-- Row one of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start mb-14">
	<Project project={info.automaticWindow} />
	<Project project={info.PICvariety} />
	<Project project={info.thisWebsite} />
</div>

<!-- Row two of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start">
	<Project project={info.stockSS} />
	<Project project={info.PiHole} />
	<Project project={info.arduinoVest} />
</div>
