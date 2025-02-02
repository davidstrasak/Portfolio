<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);
	let title = "Systemancer - " + currentPost?.title;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta name="description" property="og:description" content={currentPost?.cleanDescription} />
	<meta
		name="keywords"
		property="og:keywords"
		content="Systemancer, Blog, Articles, Systems Engineering, Engineering"
	/>
	<meta property="og:url" content={page.url.href} />
</svelte:head>
{#if currentPost}
	<BlogPost post={currentPost} insidePost={true} />
{/if}
<h2 class="text-primary text-3xl mt-4 font-systemancer">1. How to set this up:</h2>
<p class="">
	If you want a custom set up like what I did, <span class="text-secondary"
		><strong>Autohotkey</strong></span
	> <strong>will</strong> answer all your thoughts and prayers. This smaller programming language is
	actually really easy to use, if you know how!
</p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">1.1. Here are the steps:</h3>
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
<p class="">- Here is a sample script that runs excel when you press Win + E:</p>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>#Requires AutoHotkey v2.0</code></pre>
	<pre data-prefix="$"><code></code></pre>
	<pre data-prefix="$"><code>#e::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre data-prefix="$"><code>	Run "excel"</code></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<h3 class="text-primary text-2xl mt-3 font-systemancer">1.2. What does it do?</h3>
<p class="">
	- This script should start up excel when you press the windows key and E simultaneously.
</p>
<p class="">
	- Double click the script to run it and test it by pressing <span class="text-secondary"
		>Win + E</span
	>!
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
<p class=""></p>
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
<h2 class="text-primary text-3xl mt-4 font-systemancer">2. How to run truly any app</h2>
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
<h3 class="text-primary text-2xl mt-3 font-systemancer">
	2.1. How to bind any app you have installed:
</h3>
<p class="">1. Press the windows key and search for the app you want to bind</p>
<p class="">
	2. Right click it and press "<strong>Open file location</strong>"
	<img
		src="{base}/images/blog/windows_file_location.png"
		alt="describes where you can see the open file location button"
	/>
</p>
<p class="">
	3. Find the icon in the folder and right click it again - press "<strong>Copy as path</strong>"
</p>
<p class="">
	4. You now have <span class="text-secondary"
		>the exact path you can use to run the app from AutoHotkey</span
	>!
</p>
<p class="">5. Write this path into your AutoHotkey script:</p>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>#o::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre
		data-prefix="$"><code>	Run "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Obsidian.lnk"</code
		></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<p class="">This is, for example, how I run the Obsidian app.</p>
<br />
<h2 class="text-primary text-3xl mt-4 font-systemancer">
	3. How to use keys other than the windows key
</h2>
<p class="">Short AutoHotkey lesson incoming!</p>
<p class="">
	If you wanted to create a script that runs when you press o, without any windows keys, <span
		class="text-secondary">you would define it like so</span
	>:
</p>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>o::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre
		data-prefix="$"><code>	Run "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Obsidian.lnk"</code
		></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<p class="">
	But that would make it impossible for you to type anything on the keyboard - which is why I used
	the # symbol which is a symbol for the windows key (Symbols like the windows key, Ctrl, Shift,
	etc. are also called <strong>modifier keys</strong>).
	<span class="text-secondary"
		>There are other symbols that you can use for other modifier keys</span
	> that need to be pressed with your letter on the keyboard.
</p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">3.1. What are the modifier keys?</h3>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>^o:: ; Runs the app when you press Ctrl + o</code></pre>
	<pre data-prefix="$"><code>!o:: ; Alt + o</code></pre>
	<pre data-prefix="$"><code>+o:: ; Shift + o</code></pre>
	<pre data-prefix="$"><code>#o:: ; Win + o</code></pre>
</div>
<p class="">
	That's not all the variations though, because you <span class="text-secondary"
		>can also combine these modifier keys to be pressed together</span
	>
	- watch out though, because <strong>the order of the key presses matter</strong>!
</p>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>!^o:: ; Alt + Ctrl + o</code></pre>
	<pre data-prefix="$"><code>^!o:: ; Ctrl + Alt + o</code></pre>
</div>
<p class="">
	So all in all you can use these keys, or you can <span class="text-secondary"
		>re-bind any special keys you do not use on your PC</span
	>:
</p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">3.2. What are some other special keys?</h3>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>F1:: ; F1 key - you can use any of the numbered F keys</code></pre>
	<pre data-prefix="$"><code>PrtScn:: ; Print Screen</code></pre>
	<pre data-prefix="$"><code>Home:: ; Home key</code></pre>
	<pre data-prefix="$"><code>End:: ; End key</code></pre>
	<pre data-prefix="$"><code>PgUp:: ; Page Up key</code></pre>
	<pre data-prefix="$"><code>PgDn:: ; Page Down key</code></pre>
	<pre data-prefix="$"><code>Up::::</code></pre>
	<pre data-prefix="$"><code>Down::</code></pre>
	<pre data-prefix="$"><code>Left::</code></pre>
	<pre data-prefix="$"><code>Right:: ; Those are the arrow keys</code></pre>
</div>
<p class="">
	These are only some of the more useful keys you can bind scripts to. But hey - if you do not use
	the Esc key (for some reason), you can rebind it as well.
</p>
<p class="">
	My favorite of these special keys are <span class="text-secondary">the F1 keys</span>. One use for
	them could be writing special characters - but I will explain writing characters in an another
	blog post :D.
</p>
<br />
<h2 class="text-primary text-3xl mt-4 font-systemancer">
	4. How to redefine windows keyboard shortcuts
</h2>
<p class="">
	This last little tutorial is how to <span class="text-secondary"
		>redefine certain existing windows keyboard shortcuts</span
	>. It is a niche thing, but it's actually pretty useful, since windows has some Win+something key
	functionalities that you might want to keep.
</p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">
	4.1. Some of the useful windows shortcuts
</h3>
<p class="">
	- Windows has a Win+V shortcut which shows you the clipboard history <img
		src="{base}/images/blog/windows_clipboard_utility.png"
		alt="showcases the windows clipboard history utility"
	/>
</p>
<p class="">- Or you can use Win+X and then press I or A to start a powershell terminal</p>
<p class="">
	These shortcuts are handy and you may not want to get rid of them entirely, but it could happen
	that you <span class="text-secondary">would want to use them for something else</span> and rebind the
	windows shortcuts to different keys.
</p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">
	4.2. Example: Rebinding the clipboard history to Win+C
</h3>
<p class="">
	This example is showing you how you would go about re-binding the clipboard history (which is
	located at Win+V) to Win+C. I was specifically doing this so I could use Win+V to launch VS Code
	(the programming environment).
</p>
<div class="mockup-code text-accent text-lg">
	<pre data-prefix="$"><code>#c::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre data-prefix="$"><code>	Send "#v"</code></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
	<pre data-prefix="$"><code></code></pre>
	<pre data-prefix="$"><code>#v::</code></pre>
	<pre data-prefix="$"><code>&#123;</code></pre>
	<pre
		data-prefix="$"><code>	Run "C:\Users\David\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code\Visual Studio Code.lnk"</code
		></pre>
	<pre data-prefix="$"><code>&#125;</code></pre>
</div>
<p class="">
	So as you can see, it is <span class="text-secondary"
		>pretty simple and just a touch of black magic is needed</span
	>. Just rebind the original windows shortcut to the new shortcut. Now you can use the original
	clipboard shortcut for some different key bind and it will work as intended.
</p>
<p class="">
	This works, because if you bind a shortcut to run inside autohotkey, <span class="text-secondary"
		>the original windows shortcut will always take preference</span
	>, before running your other custom defined Win+some key shortcuts.
</p>
