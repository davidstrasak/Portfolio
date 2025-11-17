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
	src="{base}/images/projects/ConveyorController_Physical.png"
	width="40%"
	height="40%"
	class="float-right"
	alt="A box with some buttons and a display on it, which is used to control the conveyor"
/>

<h2 class="text-primary font-systemancer">Links:</h2>
<a
	href="https://github.com/davidstrasak/Bachelors_code"
	target="_blank"
	class="text-accent underline">Arduino Code</a
>
<br />
<a
	href="https://github.com/davidstrasak/Bachelors_PhoneApp"
	target="_blank"
	class="text-accent underline">Phone app Code</a
>
<br />
<a
	href="https://github.com/davidstrasak/Bachelors_PCB"
	target="_blank"
	class="text-accent underline">PCB Design files</a
>

<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Found my passion for electronics and PCB design</li>
		<li>Creating mobile applications</li>
		<li>Got way better at soldering</li>
		<li>Learned to host a ESP8266 WebServer and control the microcontroller through it</li>
		<li>Learned the importance of state diagrams</li>
	</ol>
	<h2 class="text-primary font-systemancer">Description:</h2>
	<p>
		This project is my Bachelor's thesis where I was tasked with designing an intuitive device which
		controls the movement of conveyors through a mobile app, so mechanical engineers have an easier
		time when commissioning conveyor installation quality (specifically when they are looking if the
		conveyor runs smoothly).
	</p>
	<p>
		I made my own PCB, added in a <span class="text-secondary">WEMOS D1 Mini development board</span
		>
		with an <span class="text-secondary">ESP8266 microcontroller</span>
		unit, wired everything with relays so I am able to switch the control panel inputs to the frequency
		drive and I created the app through which it can all be controlled thanks to a shared WiFi hotspot
		that all the devices are connected to.
	</p>
	<p>
		A cool thing about this project is that <span class="text-secondary"
			>the mobile app not only enables me to control the conveyor</span
		>, but it can have all the instructions for setup and troubleshooting the device and parts of
		the system. And since it's on mobile you do not need any additional devices :D.
	</p>
	<p>
		This was a really interesting challenge with lots of different systems that intertwine into each
		other and it was <span class="text-secondary"
			>my hardest challenge where I was solving the most issues :D.</span
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
