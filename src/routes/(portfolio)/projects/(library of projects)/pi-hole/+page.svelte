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

<div class="main project">
	<img
		src="{base}/images/projects/Showcase_PiHole.jpg"
		width="100%"
		height="100%"
		alt="A graphical web interface of PiHole."
	/>
	<div class="font-readable">
		<h2 class="font-systemancer text-primary">Lessons learned:</h2>
		<ol class="ml-10">
			<li>Lots of debugging and installing operating systems.</li>
			<li>Learned some networking.</li>
			<li>Installing and using Armbian.</li>
		</ol>
		<h2 class="font-systemancer text-primary">Description:</h2>
		<p>
			This was a summer 2023 project that involved setting up a <span class="text-secondary"
				>Banana Pi to use PiHole on</span
			>. The banana Pi uses a debian linux operating system called
			<span class="text-secondary">Armbian</span>.
		</p>
		<p>
			<a class="underline text-accent" href="https://pi-hole.net/" target="_blank">PiHole</a> is an
			open source application that I did not make that
			<span class="text-secondary"
				>monitors internet traffic and blocks trackers, advertisements or anything else you want
				blocked</span
			>. After installation it acts as a DNS server and is online 24/7.
		</p>
	</div>
</div>

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
