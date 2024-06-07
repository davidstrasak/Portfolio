<script>
	import { base } from "$app/paths";
</script>

<img
	src="{base}/images/Showcase_Stock_analysis.jpg"
	width="100%"
	height="30%"
	alt="A spreadsheet with information about stocks"
/>

<h2>Lessons learned:</h2>
<ul>
	<li>Pulling data from the web into excel using VBA.</li>
	<li>Correcting numbers to their correct decimals.</li>
	<li>Figuring out how to work with 1000 lines of excel data.</li>
	<li>Some python data pulling, which went on unused.</li>
</ul>
<h2>Description:</h2>
<p style="display: block; width: 100%">
	This was my summer 2023 project that involved taking lots of table data from a
	<a target="_blank" href="https://www.stockanalysis.com">Stock analysis website</a>, importing the
	data into excel and then converting the numbers so the digits are correct.
</p>
<p style="display: block; width: 100%">
	The main struggle was 1) getting correct data and 2) converting the data into correct numbers,
	which involved writing complicated IF formulas to check if the number has a comma, or dot inside
	it (dot is used for thousands, comma is used for decimals).
</p>
<p style="display: block; width: 100%">
	The economics themselves aren't that complicated, because they just take known formulas and
	calculate the intrinsic stock value, which is then compared with the actual stock value.
</p>
