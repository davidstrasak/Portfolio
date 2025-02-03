<script>
	import Code from "$lib/blog/Code.svelte";
	import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);

	const code1 = [
		"npx create-vite@latest my-sveltekit-project",
		"cd my-sveltekit-project",
		"npm install",
		"npm run dev"
	];

	const code2 = ["npm i -D @sveltejs/adapter-static"];

	const code3 = [
		"import adapter from '@sveltejs/adapter-static';",
		"import { vitePreprocess } from '@sveltejs/kit/vite';",

		"/** @type {import('@sveltejs/kit').Config} */",
		"const config = {",
		"   kit: {",
		"      appDir: 'app', // Required as the default is _app",
		"     adapter: adapter()",
		"},",
		"    preprocess: vitePreprocess()",
		"};",
		"export default config;"
	];

	const code4 = [
		"kit: {",
		"adapter: adapter(),",
		"paths: {",
		"	base: process.env.NODE_ENV === `production` ? `/Portfolio` : ``",
		"}",
		"}"
	];

	const code5 = [
		"//Add this only once in the <script>",
		"import { base } from `$app/paths`;",
		"",
		"//add this into every anchor tag",
		"<a href={`${base}/blog`}> Blog </a>"
	];

	const code6 = ["npm i gh-pages --save-dev"];

	const code7 = [
		"`scripts`: {",
		"`predeploy`: `npm run build`,",
		"`deploy`: `gh-pages -d build`,",
		"}"
	];

	const code8 = ["npm run deploy"];

	const code9 = [
		"`scripts`: {",
		"`git`:`git add . && git commit && git push origin main && npm run host`",
		"`host`: `npm run predeploy && npx gh-pages -d build -t true`,",
		"`dev`: `vite dev`,",
		"`build`: `vite build`,",
		"`predeploy`: `npm run build`,",
		"}"
	];

	const code10 = ["`build`: `vite build && echo davidstrasak.net > build/CNAME`,"];
</script>

<div>
	<BlogPost post={currentPost} insidePost={true} />

	<h2 class="text-secondary mt-4 text-3xl">But first for the unitiated: What is SvelteKit?</h2>
	<p>
		It's a web building framework. It allows you to follow a structure to have websites that are
		reactive.
	</p>
	<p>
		I personally love SvelteKit, because it is intuitive and it does not require a lot of hoops to
		jump through. Things just make sense!
	</p>
	<br />
	<h2 class="text-secondary mt-4 text-3xl">Alright. How to do it?</h2>
	<p>
		First of all we'll need to initialise a SvelteKit project. That can be done through <span
			>Node.js and npm</span
		>. First you will need to <span>use Vite to create a project with some name</span>. Then change
		directory there and run npm install and npm run dev.
		<span>That will start a server that you can see inside your browser.</span>
	</p>

	<Code code={code1} />

	<br />
	<h2 class="text-secondary mt-4 text-3xl">Now install the static adaper for SvelteKit</h2>
	<p>That can be done easily by using npm again.</p>

	<Code code={code2} />
	<p>
		This package allows you to translate SvelteKit syntax to normal HTML, JS and CSS, which let's
		you host this SvelteKit website on GitHub pages.
	</p>
	<br />
	<h2 class="text-secondary mt-4 text-3xl">Now add it to svelte.config.js</h2>
	<p>Just add the extra lines into the default <span>svelte.config.js.</span></p>
	<Code code={code3} />
	<p>Yay! Now you have a static website.</p>
	<br />
	<h2 class="text-secondary mt-4 text-3xl">Setting the base URL</h2>
	<p>
		Now that you have a static website, you can host it on GitHub pages. <span>But beware</span>,
		GitHub pages multi page websites do not work as the normal ones.
	</p>
	<p>
		Instead you will need to set a start of the URL that is the <span
			>same as your GitHub repository name.</span
		>
	</p>
	<p>
		For example the default URL of this portfolio is <span>davidstrasak.github.io/Porfolio</span>.
		"/Portfolio" is something I had to set into a variable and use in every anchor tag on this
		website.
	</p>
	<p>This is <span>how you set the svelte.config.js</span></p>
	<Code code={code4} />
	<p>And this is how you use the <span>{"{base}"}</span> in every anchor tag.</p>
	<Code code={code5} />
	<br />
	<h2 class="text-secondary mt-4 text-3xl">Final step to make this site hosteable:</h2>
	<p>Just add a <span>.nojekyll </span>file into the static folder of your project.</p>
	<p>
		This file tells GitHub pages to not try to generate a static site from this repository. Because
		generating is handled by us.
	</p>

	<br />
	<h2 class="text-secondary mt-4 text-3xl">
		<span class="text-accent">Life hack 1: </span>Hosting on GitHub pages automatically
	</h2>
	<p>
		The page that we have now would have to be manually built (translated from svelte to HTML, JS
		and CSS) and uploaded to github pages.
	</p>
	<p>But that's unneccesary work!</p>
	<p>
		Instead let's use the "gh-pages" package to upload our built file onto github pages and set up
		the hosting for us.
	</p>
	<p>First install the package.</p>
	<Code code={code6} />
	<p>Now add these scripts into your <span>package.json</span> file.</p>
	<Code code={code7} />
	<p>So now you can call these scripts through typing "npm run deploy".</p>
	<Code code={code8} />
	<br />
	<p>
		Or if you want to <span
			>add to git, push to a remote github repository, build the website AND host on github pages</span
		>, this is the code I run when I update my site.
	</p>
	<Code code={code9} />
	<p>
		The positive is that you need to <span
			>write only one line - "npm run git" to do all the things</span
		>
		I would want to do every time. That's like <span>saving three lines of code every time</span>!
	</p>
	<br />
	<h2 class="text-secondary mt-4 text-3xl">
		<span class="text-accent">Life hack 2: </span>Add this site to a custom domain
	</h2>
	<p>
		My website's domain is not <span>davidstrasak.github.io/Porfolio</span>, but rather
		<span>davidstrasak.net</span>.
	</p>
	<p>
		I do not want to go into all the topics that go through adding a custom domain to a page hosted
		on GitHub pages, but I want to show <span
			>how can you automatically add the custom domain when using gh-pages</span
		>.
	</p>
	<p>
		You see, if you try to use gh-pages with a custom domain, your custom domain will be reset at
		every upload of the server.
	</p>
	<p>
		That is because the custom domain is stored inside a file in the build folder. <span
			>This file is called CNAME</span
		>.
	</p>
	<p>
		So I figured out that if I create this CNAME file inside the build folder every time after
		building the page, the custom URL will be set automatically. <span
			>That can be done through this line</span
		>.
	</p>
	<Code code={code10} />
	<p>
		This code is all you'll need to automate that last annoying step of adding the custom URL of the
		website into GitHub pages.
	</p>
	<br />
	<h2 class="text-secondary mt-4 text-3xl">
		If you've read this so far, you can now go and create a website that you can call your own!
		Design it how you want and use all the svelte frameworks you can find!
	</h2>
	<p class="mb-40">Because what could go wrong?</p>
</div>
