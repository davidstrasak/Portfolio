<script lang="ts">
	let inputText =
		"# Examples:\nThis is normal text\n## This is a second paragraph\n```\nThis is some code\n```";
	let outputText = "";

	function convertMDtoHTML() {
		let htmlArray: string[] = [];
		let splitText = inputText.split("\n");
		let codeBlock = false;
		console.log(splitText);

		splitText.forEach((line) => {
			let settings = "";
			if (line.startsWith("# ")) {
				settings = `<h1 class="text-4xl text-secondary mb-6 font-bold">`;
				line = line.replace("# ", settings);
				line = line + "</h1>";
			} else if (line.startsWith("## ")) {
				settings = `<h2 class="text-secondary text-3xl mt-4">`;
				line = line.replace("## ", settings);
				line = line + "</h2>";
			} else if (line.startsWith("### ")) {
				settings = `<h3 class="text-secondary text-2xl mt-3">`;
				line = line.replace("### ", settings);
				line = line + "</h3>";
			} else if (line.startsWith("```")) {
				codeBlock = !codeBlock;
				if (codeBlock) {
					line = `<div class="mockup-code text-info">`;
				} else {
					line = `</div>`;
				}
			} else if (codeBlock) {
				settings = `<pre data-prefix="$"><code>`;
				line = settings + line + "</code></pre>";
			} else {
				let settings = `<p class="text-lg text-primary">`;
				line = settings + line + "</p>";
			}

			// Replace __underscores__ with <span> tags directly
			line = line.replace(/__(.*?)__/g, '<span class="text-secondary">$1</span>');

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

<p>{outputText}</p>
