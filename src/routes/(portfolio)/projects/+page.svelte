<script lang="ts">
	import Project from "$lib/projects/Project.svelte";
	import { base } from "$app/paths";
	import projects from "./projects";
</script>

<h1 class="text-center">
	<p class="inline text-4xl text-primary font-systemancer">My recent projects</p>
	<p class="text-xl font-systemancer">... and the lessons learned from them</p>
</h1>

{#each projects as project, index}
	<Project {project} reverse={index % 2 === 0} />
{/each}
