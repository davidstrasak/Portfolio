<script>
	import { base } from "$app/paths";
</script>

<div class="main project">
	<img
		src="{base}/images/Showcase_PiHole.jpg"
		width="100%"
		height="100%"
		alt="A graphical web interface of PiHole."
	/>
	<div>
		<h2 class="text-secondary font-bold">Lessons learned:</h2>
		<ol class="ml-10">
			<li>Lots of debugging and installing operating systems.</li>
			<li>Learned in general about how the internet and websites work.</li>
			<li>Installing and using Armbian.</li>
		</ol>
		<h2 class="text-secondary font-bold">Description:</h2>
		<p>This was a summer 2023 project that involved setting up a Banana Pi to use PiHole on.</p>
		<p>
			<a class="underline text-accent" href="https://pi-hole.net/" target="_blank">PiHole</a> is an application
			that monitors internet traffic and blocks trackers, advertisements or anything else you want blocked.
			After installation it acts as a server and is online 24/7.
		</p>
	</div>
</div>

<style>
	ol {
		list-style-type: decimal; /* Remove default list styling */
	}
	* {
		margin-top: 10px;
	}
</style>
