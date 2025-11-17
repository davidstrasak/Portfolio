<script lang="ts">
	import Project from "$lib/projects/Project.svelte";
	import { base } from "$app/paths";
	import projects from "./projects";
</script>

<h1 class="block text-4xl text-primary font-systemancer text-center">
	My recent projects (Lessons Learned)
</h1>
<a href="{base}/projects/feed" class="text-xl text-accent underline text-center block"
	>Want to see this through an instagram-like feed?</a
>

{#each projects as project, index}
	<Project {project} reverse={index % 2 === 0} />
{/each}
