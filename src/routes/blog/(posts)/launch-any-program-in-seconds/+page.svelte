<script lang="ts">
	import { base } from "$app/paths";
</script>

<h1 class="text-4xl text-secondary mb-6 font-bold">
	How can I launch any program on my PC in seconds
</h1>
<p class="">
	Ever since about 6 months ago I was able to run almost any program on my PC by using a keyboard
	shortcut. That was the most efficient PC setup I've ever had and today I will share it with you.
</p>
<br />
<h2 class="text-secondary text-3xl mt-4">How to set this up:</h2>
<p class="text-lg text-primary">
	If you want a custom set up like what I did, <span class="font-bold"
		><span class="text-secondary">Autohotkey</span></span
	>
	will answer all your thoughts and prayers. This smaller programming language is actually really easy
	to use, if you know how! <span class="text-secondary">Here are the steps:</span>
</p>
<p class="text-lg text-primary">
	- <span class="text-secondary"
		><a href="https://www.autohotkey.com/" class="underline">Download autohotkey v2 here</a></span
	>
</p>
<p class="text-lg text-primary">
	- Create a new file called *script.ahk* and open it up with notepad or any text editor.
</p>
<p class="text-lg text-primary">
	- Here is a sample script that runs excel when you press Win + E (or Ctrl+Alt+E if you are on the
	US keyboard):
</p>
<div class="mockup-code text-info text-lg">
	<pre data-prefix="$"><code>#Requires AutoHotkey v2.0</code></pre>
	<pre data-prefix="$"><code></code></pre>
	<pre data-prefix="$"><code>#e::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre data-prefix="$"><code> Run "excel"</code></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<p class="text-lg text-primary">
	- This script should start up excel when you press the windows key and E simultaneously.
</p>
<p class="text-lg text-primary">
	- Double click the script to run it and test it by pressing <span class="text-secondary"
		>Win+E</span
	> (or Ctrl+Alt+E if you are on the US keyboard)!
</p>
<p class="text-lg text-primary">
	- If it works, <span class="text-secondary"
		>you can copy the code from #e to the end bracket
	</span>(Do not copy the #requires line. That needs to be there just once). Change the E key to any
	other key and change the excel to any other program.
</p>
<p class="text-lg text-primary">- You can now modify the script however you want!</p>
<p class="text-lg text-primary">
	- <span class="text-secondary"
		>Now, save this script into the folder that runs it on startup:</span
	>
</p>
<p class="text-lg text-primary">1. Press Win+R (Or type "run" into the windows search)</p>
<p class="text-lg text-primary">2. Type "shell:startup"</p>

<p class="text-lg text-primary">
	<img
		src="{base}/images/blog/shell_startup.png"
		alt="shell:startup command in windows run utility"
	/>
</p>
<p class="text-lg text-primary">3. Save the script here.</p>
<p class="text-lg text-primary">
	- <span class="text-secondary"
		>This will ensure you always have these new shortcuts available</span
	>, because the script will start with your PC from now on.
</p>
<p class="text-lg text-primary">
	You can now use this basic script to define custom keyboard shortcuts to open any app you want.
	But <span class="text-secondary"
		>if you want to learn more about this system, then read on! There is more coming!</span
	>
</p>
<div class="mb-40"><br /></div>
