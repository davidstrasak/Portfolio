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

<img
	src="{base}/images/projects/Embedded_System.jpeg"
	width="40%"
	height="40%"
	class="float-right"
	alt="A board with a bunch of electrical parts "
/>

<a href="https://github.com/davidstrasak/PICvariety" target="_blank"
	><h2 class="text-accent underline">Code here</h2></a
>

<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Working with the datasheet of a microcontroller unit</li>
		<li>Setting and initialising a ton of bits and pins.</li>
		<li>
			Getting to know timers, interrupts, UART, ADC, DAC, sleep modes and how microcontrollers work.
		</li>
		<li>And also it was my first experience properly programming in C.</li>
	</ol>
	<h2 class="text-primary font-systemancer">Description:</h2>
	<p>
		I've been able to take a course on working with embedded systems at school. The main curriculum
		is <span class="text-secondary"
			>programming in the C language and programming the PIC18F46K22 processor
		</span>by MicroChip.
	</p>
	<p>
		The whole concept of low level programming is interesting to me and I will be doing some more
		when possible.
	</p>
	<p>
		The final project of this course was <span class="text-secondary font-bold"
			>creating 5 tasks:</span
		>
	</p>
	<ul class="ml-10">
		<li>UART - the processor takes an input and sends it back reversed</li>
		<li>PWM - increment the brightness of an LED</li>
		<li>ADC - display the values of the two potentiometers</li>
		<li>DAC - generate three signals that I can display on an osciloscope on the PC</li>
		<li>
			GAME - program a game where you try to match a random number with the potentiometer value
		</li>
		<li class="text-secondary">
			Menu - program an interface and navigation so that I can switch through the tasks
		</li>
	</ul>

	<p>
		This was probably the biggest coding project I have done in regards to <span
			class="text-secondary">tracking state inside a project</span
		>. So if you want to see how I did it, you can check out the code on my GitHub.
	</p>
</div>

<style>
	ol {
		list-style-type: decimal; /* Remove default list styling */
	}
	ul {
		list-style-type: initial; /* Remove default list styling */
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
