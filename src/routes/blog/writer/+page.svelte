<script lang="ts">
	import { base } from "$app/paths";

	let inputText =
		"# Hello there\nSo you've stumbled on this page huh?\n## This is a page where I write my blogs.\n### Created mainly because I'd rather write in Markdown than HTML\n```\nyou can write code\n```\nOr other ==important things==.\nAnd this is the output to ==paste into the page:==";
	let outputText = "";

	function convertMDtoHTML() {
		let htmlArray: string[] = [];
		let splitText = inputText.split("\n");
		let codeBlock = false;
		let firstHeaderCounter = 0;
		let secondHeaderCounter = 0;

		splitText.forEach((line, index) => {
			let settings = "";
			if (line.startsWith("# ")) {
				settings = `<h1 class="text-4xl text-primary mb-6 font-bold">`;
				line = line.replace("# ", settings);
				line = line + "</h1>";
			} else if (line.startsWith("## ")) {
				secondHeaderCounter += 1;
				firstHeaderCounter = 0;
				settings = `<h2 class="text-primary text-3xl mt-4"> ${secondHeaderCounter}. `;
				line = line.replace("## ", settings);
				line = line + "</h2>";
			} else if (line.startsWith("### ")) {
				firstHeaderCounter += 1;
				settings = `<h3 class="text-primary text-2xl mt-3"> ${secondHeaderCounter}.${firstHeaderCounter}. `;
				line = line.replace("### ", settings);
				line = line + "</h3>";
			} else if (line.startsWith("```")) {
				codeBlock = !codeBlock;
				if (codeBlock) {
					line = `<div class="mockup-code text-info text-lg">`;
				} else {
					line = `</div>`;
				}
			} else if (codeBlock) {
				settings = `<pre data-prefix="$"><code>`;
				line = settings + line + "</code></pre>";
			} else if (line === "") {
				line = `<br/>`;
			} else {
				let settings = `<p class="">`;
				line = settings + line + "</p>";
			}

			if (index === splitText.length - 1) {
				line = `<div class="mb-40">` + line + `</div>`;
			}

			// Replace __underscores__ with <span> tags directly
			line = line.replace(/==(.*?)==/g, '<span class="text-secondary">$1</span>');

			// Replace **bold** with <strong> tags
			line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

			// Replace *italic* with <em> tags
			line = line.replace(/\*(.*?)\*/g, "<em>$1</em>");

			// Replace { with &#123; and } with &#125;
			if (codeBlock) {
				line = line.replace(/{/g, "&#123;");
				line = line.replace(/}/g, "&#125;");
			}

			htmlArray.push(line);
		});

		let html = htmlArray.join("");

		return html;
	}

	$: {
		inputText;
		outputText = convertMDtoHTML();
	}
</script>

<textarea
	class="w-full h-64 border rounded-md p-2"
	bind:value={inputText}
	on:change={convertMDtoHTML}
></textarea>

<p>{@html outputText}</p>

<hr />

<p>{outputText}</p>
