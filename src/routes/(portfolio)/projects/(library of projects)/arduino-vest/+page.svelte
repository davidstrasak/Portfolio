<script>
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import Project from "$lib/projects/Project.svelte";
	import projects from "../../projects";

	let currentProject = projects.find(
		(proj) => proj.demoLink.split("/").pop() === page.url.pathname.split("/").pop()
	);
</script>

<Project project={currentProject} insideProject={true} />

<div class="block items-center w-full">
	<img
		src="{base}/images/projects/Vest_Gif.gif"
		alt="a vest with LEDs powered by an arduino"
		width="30%"
		height="30%"
		class="block m-auto float-right"
	/>
	<a
		class="text-accent block underline text-left"
		href="https://github.com/davidstrasak/Cybertown_LEDs/"
		target="_blank">Code here</a
	>
</div>

<h2 class="text-primary font-systemancer">Lessons learned:</h2>
<ol class="ml-10">
	<li>Working with an arduino LED library.</li>
	<li>My first big soldering project.</li>
	<li>Using PWM pins to connect LEDs.</li>
	<li>Next time I will solder the cables to the arduino. Not superglue them to the pins.</li>
</ol>

<h2 class="text-primary font-systemancer">Description</h2>
<p>I've created this vest for the Cybertown event to look like a proper cyberpunk.</p>
<p>
	I had no idea what I was doing - <span class="text-secondary"
		>this was my first hardware project ever</span
	>. One thing about being an engineer though, is you realise you can figure lots of stuff out if
	you think hard.
</p>
<p>
	The code itself is pretty simple - just initialise the LED pins, set up the animation and run it.
</p>
<p>
	Arduino wasn't the best platform for this, because <span class="text-secondary"
		>if I had just bought a LED strip on aliexpress, it would be easier to do and it would last
		longer</span
	>. Arduino 9V battery lasted me until the evening of the first day of the event.
</p>

<style>
	ol {
		list-style-type: decimal; /* Remove default list styling */
	}
	p {
		margin-top: 5%;
	}
	h2 {
		margin-top: 5%;
	}
	a {
		margin-top: 5%;
	}
</style>
