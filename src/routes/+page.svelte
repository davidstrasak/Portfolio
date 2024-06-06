<!-- This is the landing page -->

<script lang="ts">
	import { base } from "$app/paths";
	import info from "./projects/info";
</script>

<div class="whitespace-normal h-fit">
	<h1 class="text-5xl font-bold mb-5">Hello, I am DAVID.</h1>
	<h2 class="text-secondary font-bold">Dabbling Around (in) Various Interesting Disciplines.</h2>
	<br />
	<p class="inline">Welcome to the</p>
	<p class="inline text-accent">matrix of my making.</p>
	<p class="inline">
		Since my CV is just the compact version of my skills, I've rigged up this portfolio with the
		other slick projects you did not see coming.
	</p>
	<p>So jack in and witness the cyber-wizardry beyond just random bullet points!</p>
	<br />
	<br />
	<br />
	<p class="invisible md:visible">press ENTER to load the projects:</p>
</div>

{#each Object.values(info) as proj}
	<link rel="preload" href={proj.image} as="image" />
{/each}
<link rel="preload" href="{base}/CV_David_Strasak.jpg" as="image" />
<link rel="prerender" href="{base}/" />
<link rel="prerender" href="{base}/projects" />
<link rel="prerender" href="{base}/CV" />
<link rel="prerender" href="{base}/about" />
