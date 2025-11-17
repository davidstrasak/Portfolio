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
	src="{base}/images/projects/Quadcopter_results.png"
	width="100%"
	height="100%"
	alt="MATLAB images of the route the quadcopter was moving through"
/>

<h2 class="text-primary font-systemancer">Links:</h2>
<a
	href="https://github.com/davidstrasak/Quadcopter_sim"
	target="_blank"
	class="text-accent underline">MATLAB code</a
>

<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Implemented a regulator for the first time and really understood the concepts</li>
		<li>Regulating in discrete time intervals</li>
	</ol>
	<h2 class="text-primary font-systemancer">Description:</h2>
	<p>
		A quadcopter has 3 torques and 1 thrust that I need to regulate to keep in check 3 angles and 3
		axis that the quadcopter moves in. The thrust represents how quickly the 4 motors spin and the
		torques is represented by the rotation of the quadcopter so it can move not only up and down,
		but also sideways.
	</p>
	<p>
		<span class="text-secondary">All of these things can be found on the real quadcopter</span> as well
		as my simulation. The only thing omitted from my simulation were external influences like wind.
	</p>
	<p>
		As for the regulation, the only way to regulate using a state based regulation like the observer
		is to have the quadcopter in a mode where the angles are really small (because then we can say
		that sines of angles are equal to the angles themselves). Then it was only a matter of
		regulating the thrust and calculating the required angles from the x and y axis differences.
	</p>
	<p>
		<span class="text-secondary"
			>It was a really interesting challenge that made things click for me in terms of real
			regulation.</span
		>
	</p>
</div>

<style>
	ol {
		list-style-type: decimal;
	}
	p {
		margin-top: 3%;
	}
	h2 {
		margin-top: 5%;
	}
	a {
		margin-top: 5%;
	}
</style>
