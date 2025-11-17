<script lang="ts">
	import Project from "$lib/projects/Project.svelte";
	import { base } from "$app/paths";
	import projects from "./projects";
</script>

<h1 class="block text-4xl text-primary font-systemancer text-center">My recent projects</h1>
<p class="text-xl font-systemancer text-center block">... and the lessons learned from them</p>

{#each projects as project, index}
	<Project {project} reverse={index % 2 === 0} />
{/each}
