<script>
	import { base } from "$app/paths";
</script>

<noscript> Please enable JavaScript to view the this page. </noscript>

<!-- This is the landing page -->
<p class="">I am an aspiring <span class="text-secondary">SYSTEMANCER</span>.</p>
<br />
<div class="whitespace-normal h-fit">
	<div class="border-solid border-2 border-primary p-2">
		<img
			src="{base}/systemancer.svg"
			alt="systemancer icon"
			class="h-16 mr-7"
			style="float: left;"
		/>
		<strong>Systemancer</strong>
		<p class="italic text-lg">/sis-tuh-man-ser/</p>
		<br />
		<p class="italic text-lg">noun</p>
		<p class="text-2xl ml-8 mr-8 text-justify">
			An aspiring "Systemancer" is a future master of technology, aiming to understand how intricate
			technological systems work together to find the most effective solution.
		</p>
	</div>

	<br />
	<div class="w-full text-justify">
		<p class="text-secondary">But you can call me David.</p>
		<ol class="">
			<li class="mt-4">
				I'm an aspiring <span class="text-secondary">systems engineer</span>.
			</li>
			<li class="mt-4">
				This webpage is a <span class="text-secondary">blog</span> and a
				<span class="text-secondary">portfolio</span> website where I showcase my work and write about
				interesting topics.
			</li>
			<li class="mt-4">
				I left an accounting carreer for something more interesting: <span class="text-secondary"
					>technology, electrical power and programming are my daily bread</span
				>.
			</li>
			<li class="mt-4">
				But most of all I like to work <span class="text-secondary">as effective as possible</span>.
			</li>
		</ol>
	</div>
</div>

<style>
	ol {
		list-style-type: none; /* Remove default list styling */
	}

	ol li:before {
		content: "- "; /* Add a dash before each list item */
	}
</style>
