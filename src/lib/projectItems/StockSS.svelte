<script>
	import { base } from "$app/paths";
</script>

<img
	src="{base}/images/projects/Showcase_Stock_analysis.jpg"
	width="100%"
	height="100%"
	alt="A spreadsheet with information about stocks"
/>
<div class="font-readable">
	<h2 class="text-primary font-systemancer">Lessons learned:</h2>
	<ol class="ml-10">
		<li>Pulling data from the web into excel using VBA.</li>
		<li>Type checking and correcting numbers to the correct decimals.</li>
		<li>Figuring out how to work with 1000 lines of excel data.</li>
		<li>Some python data pulling, which went on unused.</li>
	</ol>
	<h2 class="text-primary font-systemancer">Description:</h2>
	<p style="display: block; width: 100%">
		This was my summer 2023 project that involved taking lots of table data from a
		<a class="text-accent underline" target="_blank" href="https://www.stockanalysis.com"
			>Stock analysis website</a
		>,
		<span class="text-secondary">importing the data into excel and then converting the numbers</span
		> so the digits are correct.
	</p>
	<p style="display: block; width: 100%">
		<span class="text-secondary">It is a merger of the skills from both of my universities</span>,
		but the economics themselves aren't that complicated. They take known formulas and calculate the
		intrinsic stock value, which is then compared with the actual stock value.
	</p>
	<p style="display: block; width: 100%">
		<span class="text-secondary">The main struggle was</span> 1) getting correct data and 2) converting
		the data into correct numbers, which involved writing complicated IF formulas to check if the number
		has a comma, or dot inside it (dot is used for thousands, comma is used for decimals).
	</p>
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
