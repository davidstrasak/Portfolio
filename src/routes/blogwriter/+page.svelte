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

<p>{@html outputText}</p>
