<script>
	import { marked } from "marked";

	let inputText =
		"Now this \n# this is something I like \n## Now I can write in MD and convert it into HTML \n### and this will be converted forever";
	let outputText = "";

	function convertMDtoHTML() {
		const markdown = inputText;
		const html = marked(markdown);
		return html;
	}

	$: {
		inputText;
		(async () => {
			outputText = await convertMDtoHTML();
		})();
	}
</script>

<textarea
	class="w-full h-64 border rounded-md p-2"
	bind:value={inputText}
	on:change={convertMDtoHTML}
></textarea>

<p>{outputText}</p>

<p>Now this</p>
<h1>this is something I like</h1>
<h2>Now I can write in MD and convert it into HTML</h2>
<h3>and this will be converted forever</h3>
