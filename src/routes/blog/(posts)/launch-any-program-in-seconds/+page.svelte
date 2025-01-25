<script lang="ts">
	import { base } from "$app/paths";
</script>

<h1 class="text-4xl text-primary mb-6 font-bold">
	How can I launch any program on my PC in seconds
</h1>
<p class="">
	Ever since about 6 months ago I was able to run almost any program on my PC by using a keyboard
	shortcut. That was the most efficient PC setup I've ever had and today I will share it with you.
</p>
<br />
<h2 class="text-primary text-3xl mt-4">1. How to set this up:</h2>
<p class="">
	If you want a custom set up like what I did, <span class="font-bold"
		><span class="text-secondary">Autohotkey</span></span
	> will answer all your thoughts and prayers. This smaller programming language is actually really easy
	to use, if you know how!
</p>
<p class=""><span class="text-secondary">Here are the steps:</span></p>
<p class="">
	- <span class="text-secondary"
		><a href="https://www.autohotkey.com/" class="underline text-accent"
			>Download autohotkey v2 here</a
		></span
	>
</p>
<p class="">
	- Create a new file called <em>script.ahk</em> and open it up with notepad or any text editor.
</p>
<p class="">
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
<p class="">
	- This script should start up excel when you press the windows key and E simultaneously.
</p>
<p class="">
	- Double click the script to run it and test it by pressing <span class="text-secondary"
		>Win+E</span
	> (or Ctrl+Alt+E if you are on the US keyboard)!
</p>
<p class="">
	- If it works, <span class="text-secondary"
		>you can copy the code from #e to the end bracket
	</span>(Do not copy the #requires line. That needs to be there just once). Change the E key to any
	other key and change the excel to any other program.
</p>
<p class="">- You can now modify the script however you want!</p>
<p class="">
	- <span class="text-secondary"
		>Now, save this script into the folder that runs it on startup:</span
	>
</p>
<p class="">1. Press Win+R (Or type "run" into the windows search)</p>
<p class="">2. Type "shell:startup"</p>
<p class="">3. Save the script here.</p>
<p class="">
	<img
		src="{base}/images/blog/shell_startup.png"
		alt="the shell:startup command in windows run utility"
	/>
</p>
<p class="">
	- <span class="text-secondary"
		>This will ensure you always have these new shortcuts available</span
	>, because the script will start with your PC from now on.
</p>
<p class="">
	You can now use this basic script to define custom keyboard shortcuts to open any app you want.
	But <span class="text-secondary"
		>if you want to learn more about this system, the read on, because there is more coming!</span
	>
</p>
<br />
<h2 class="text-primary text-3xl mt-4">2. How to truly run any app</h2>
<p class="">
	Running an app like excel is good, <span class="text-secondary">but not good enough</span>. It
	requires the app you want to bind to some key combination to be an
	<strong>explicit statement</strong> you could write into the Windows Run Utility (the one where we
	wrote shell:startup earlier).
</p>
<p class="">
	-> For example, my notetaking app is called obsidian, but <span class="text-secondary"
		>if you try to write "obsidian", it will be unable to launch</span
	>, since not all apps have this possibility.
</p>
<h3 class="text-primary text-2xl mt-3">
	2.1. Let's fix that and look into how you can bind <em>any app you have installed</em>:
</h3>
<p class="">1. Press the windows key and search for the app you want to bind</p>
<p class="">
	3. Find the icon in the folder and right click it again - press "<strong>Copy as path</strong>"
</p>
<p class="">
	4. You now have <span class="text-secondary"
		>the exact path you can use to run the app from AutoHotkey</span
	>!
</p>
<p class="">5. Write this path into your AutoHotkey script:</p>
<div class="mockup-code text-info text-lg">
	<pre data-prefix="$"><code>#o::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre
		data-prefix="$"><code> Run "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Obsidian.lnk"</code
		></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<p class="">This is, for example, how I run the Obsidian app.</p>
<h2 class="text-primary text-3xl mt-4">3. How to use keys other than the windows key</h2>
<p class="">Short AutoHotkey lesson incoming!</p>
<br />
<h2 class="text-primary text-3xl mt-4">4. How to redefine windows keyboard shortcuts</h2>
<br /><br /><br />
<div class="mb-40"><br /></div>
