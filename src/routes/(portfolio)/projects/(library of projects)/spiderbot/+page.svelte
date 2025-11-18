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

<div class="flex flex-row">
	<img
		src="{base}/images/projects/SpiderBotWalkFront.gif"
		width="50%"
		height="50%"
		alt="The Quad Legged Spider Bot moving - front view."
	/>
	<img
		src="{base}/images/projects/SpiderBotWalkTop.gif"
		width="50%"
		height="50%"
		alt="The Quad Legged Spider Bot moving - top view."
	/>
</div>

<h2 class="text-primary font-systemancer">Links:</h2>
<a href="https://github.com/davidstrasak/Spiderbot" target="_blank" class="text-accent underline"
	>Full Project</a
>

<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Real-world controlling</li>
		<li>Working with li-ion batteries</li>
		<li>See inverse kinematics in practice</li>
		<li>Soldering on a perfboard</li>
	</ol>
	<h2 class="text-primary font-systemancer">Description:</h2>
	<p>
		I have always been fascinated by spider-robots so I made my own. Creating this involved making
		my own circuit on a perfboard, 3D printing all the parts and putting it all together with a good
		controlling algorithm. The spiderbot has 4 legs which have a total of 12 servos inside them.
	</p>
	<p>
		<span class="text-secondary">The circuit</span> starts with a 12.6V Li-Ion battery which goes into
		a DC/DC voltage converter to convert it to 5 Volts. These 5 Volts go into the Arduino Pro board and
		into the 12 MG90S servos. The arduino controls the servos using PWM through it's digital pins.
	</p>
	<p>
		The Arduino C++ code uses the Servo.h library to control the servos (handles the PWM signal
		generation) and FlexiTimer2 to move smoothly between position interpolation logic.
	</p>
	<h2 class="text-primary font-systemancer">Work in Progress:</h2>
	<p>This is my only project here which is not yet finished.</p>
	<ul class="ml-10">
		<li>
			I am currently working on a custom PCB with the <span class="text-secondary"
				>STM32L412KBT6 microcontroller</span
			>
			- just to make it even quicker and use a higher quality MCU :).
		</li>
		<li>Programming it with using a Real Time Operating System.</li>
		<li>
			I'm also currently working on controlling it through <span class="text-secondary"
				>Bluetooth</span
			>.
		</li>
		<li>
			Finally it needs better power stability by getting a better battery or more decoupling
			capacitors.
		</li>
	</ul>
</div>

<style>
	ol {
		list-style-type: decimal;
	}
	ul {
		list-style-type: circle;
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
