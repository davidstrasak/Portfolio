<script>
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import Project from "$lib/projects/Project.svelte";
	import projects from "../../projects";

	let currentProject = projects.find(
		(proj) => proj.demoLink.split("/").pop() === page.url.pathname.split("/").pop()
	);
</script>

{#if currentProject}
	<Project project={currentProject} insideProject={true} />
{/if}

<img
	src="{base}/images/projects/Window_gif.gif"
	width="100%"
	height="100%"
	alt="A gif of a window opening and closing"
/>
<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Powering motors through arduino.</li>
		<li>My first larger project with lots of wires.</li>
		<li>It's good to proactively lead school projects, because that means someone is leading.</li>
	</ol>

	<h2 class="text-primary font-systemancer">Description</h2>
	<p>
		This project was a school project we've completed as a <span class="text-secondary"
			>4 person team</span
		>.
	</p>
	<p>
		The concept is simple - the window opens or closes based on outside conditions. The conditions
		are <span class="text-secondary"
			>online weather information, room temperature, humidity and time
		</span> (certain times a day the window opens).
	</p>
	<p>
		The whole project was <span class="text-secondary">programmed through MATLAB</span>. The micro
		controller unit was responsible for getting the data from sensors and opening and closing the
		window, while the PC was getting the online data and sending it to the MCU.
	</p>
</div>

<style>
	ol {
		list-style-type: decimal; /* Remove default list styling */
	}
	p {
		margin-top: 3%;
	}
	h2 {
		margin-top: 5%;
	}
</style>
