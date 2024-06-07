<script>
	import { base } from "$app/paths";
</script>

<img
	style="float: right"
	src="{base}/images/Window_gif.gif"
	width="100%"
	height="100%"
	alt="A gif of a window opening and closing"
/>
<div>
	<h2 class="text-secondary font-bold">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Powering motors through arduino.</li>
		<li>My first larger project with lots of wires.</li>
		<li>It's good to proactively lead school projects, because that means someone is leading.</li>
	</ol>

	<h2 class="text-secondary font-bold">Description</h2>
	<p>This project was a school project we've completed as a 4 person team.</p>
	<p>
		The concept is simple - the window opens or closes based on outside conditions. The conditions
		are online weather information, room temperature, humidity and time (certain times a day the
		window opens).
	</p>
	<p>
		The whole project was programmed through MATLAB, so the processor itself just had the job of
		opening and closing the window, while the computer was doing the logic behind it.
	</p>
</div>

<style>
	ol {
		list-style-type: decimal; /* Remove default list styling */
	}
	* {
		margin-top: 10px;
	}
</style>
