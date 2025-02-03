<script lang="ts">
	import Project from "$lib/projectStructure/Project.svelte";
	import projects from "./projects";
</script>

<h1 class="text-5xl mb-5 text-center">
	<p class="inline text-5xl text-primary font-systemancer">My recent projects</p>
	<p class="text-3xl text-center font-systemancer mb-[5%]">... and the lessons learned from them</p>
</h1>

<!-- Row one of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start mb-14">
	<Project project={projects.automaticWindow} />
	<Project project={projects.PICvariety} />
	<Project project={projects.thisWebsite} />
</div>

<!-- Row two of items -->
<div class="flex gap-10 flex-col md:flex-row justify-between items-center md:items-start">
	<Project project={projects.stockSS} />
	<Project project={projects.PiHole} />
	<Project project={projects.arduinoVest} />
</div>
