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
<h1 class="text-4xl text-primary mb-6 font-systemancer">AI made me appreciate using my brain</h1>
<br />
<p class="">
	You see, before AI <span class="text-secondary">I took thinking for granted</span> - I had no choice
	to delegate it somewhere, so I just did it.
</p>
<p class="">
	When AI got useable I started to use it more and more - delegating the thinking to get to the
	decisions I should make faster.
</p>
<p class="">
	I don't do it so much anymore and that is why today I wanna write about using AI less and feeling
	good because of it.
</p>
<h2 class="text-primary text-3xl mt-4 font-systemancer">1. So how to feel good by using AI less</h2>
<p class="">
	Let's talk about <span class="text-secondary">writing an email</span>, for example. You can use AI
	to write a good enough email in seconds. That does not take any effort, but your task gets done.
	You can feel good it's done, but in reality
	<span class="text-secondary">it is a hollow victory</span>.
</p>
<p class="">
	You <strong>did not get better at writing emails</strong> - you just delegated the problem and something
	else solved it for you.
</p>
<p class="">
	You have a choice though - you can willingly say <span class="text-secondary"
		>"I will not use AI for this email today. I will write it myself"</span
	>. You need to put in the time and effort - even when it's a basic email.
</p>
<p class="">That is what I like to call <strong>"voluntary discomfort"</strong>.</p>
<p class="">
	<span class="text-secondary"
		>Thanks to AI you have a chance to experience discomfort whenever you want just by choosing not
		to use AI to solve problem for you.</span
	>
</p>
<h2 class="text-primary text-3xl mt-4 font-systemancer">
	2. Why would I wanna put myself into discomfort like this?
</h2>
<p class="">
	This is a question that makes sense. <strong
		>Why should I waste time and effort in writing this email</strong
	> when it can be done in an instant in a good enough manner?
</p>
<p class="">
	Let me give you a different example to show why voluntary discomfort is an amazing tool. A holy
	grail of all self-help gurus on the internet that will definitely solve all your problems :D - <span
		class="text-secondary">cold showers</span
	>.
</p>
<p class="">
	Let's say you are taking a cold shower every day for a few months. You are putting yourself into
	voluntary discomfort. You are getting used to the weird feeling and to doing something that is
	hard for no reason other than to suffer.
</p>
<p class="">
	Suddenly and unexpectedly, <span class="text-secondary"
		>your water company shuts off your hot water</span
	>. You are put into the other type of discomfort -
	<strong>involuntary (forced) discomfort</strong>.
</p>
<p class="">
	<span class="text-secondary">See the value in voluntarily doing things that are hard?</span> Taking
	a cold shower when you are forced to will be easier for you and it is the same when you are used to
	doing hard things and then you are forced into doing something really hard.
</p>
<p class="">
	<span class="text-secondary"
		>The point in using AI less is to learn to think again. It teaches you to do hard things in
		general - either when it is voluntary or when it is actually needed.</span
	>
</p>
<h2 class="text-primary text-3xl mt-4 font-systemancer">
	3. But it's not just about using your brain more
</h2>
<p class="">
	Yes - using your brain is a benefit. But <span class="text-secondary"
		>what if the option to solve things with AI suddenly disappeared?</span
	> <strong>Then it becomes a failsafe against the technology itself.</strong>
</p>
<p class="">That is why I want to talk about AI becoming worse over time.</p>
<br />
<p class="">
	Right now <span class="text-secondary">AI is not profitable</span>. It is burning investors' money
	and showing some income, but definitely no profits for the biggest companies - OpenAI, Google,
	Meta and X. The way that AI from these companies works right now is not sustainable.
</p>
<p class=""><strong>AI will have to start making money at some point.</strong></p>
<h3 class="text-primary text-2xl mt-3 font-systemancer">3.1. How could AI make money?</h3>
<p class="">For me there are two ideas that first come to mind: Advertising and Data collection.</p>
<p class="">
	<span class="text-secondary">Advertising:</span> Let 's say you are looking for a frying pan and you
	naturally go to ChatGPT to do your market research. Let's say Tescoma is paying OpenAI some money for
	advertising spots. Naturally the best way to advertise using AI would be to answer the prompt with
	"These are some good frying pan companies, but the best choice for you is this frying pan by Tescoma!"
</p>
<p class="">
	<span class="text-secondary">Data collection:</span> Then there is the data collection and this is
	just a problem of security online overall - if you talk with AI about stuff, it might eventually keep
	tabs on you and know your occupation, problems, what are you looking for, etc. Let's hope the EU will
	be here to protect us from this excessive data collection when it will matter.
</p>
<p class="">
	<span class="text-secondary"><strong>Would you use an AI that does this?</strong></span>
</p>
<h2 class="text-primary text-3xl mt-4 font-systemancer">4. Closing thoughts</h2>
<p class="">
	<span class="text-secondary">I'm not trying to scare you (or myself).</span> I wanted to show that
	not using AI is not only good for you, but also
	<span class="text-secondary">a way to be safe from this technology getting shittier</span>.
</p>
<p class="">
	Not using AI <strong>made me happy to use my brain</strong>. Made me
	<strong>appreciate the challenging thoughts and solving problems just by myself</strong>. It has
	the potential to let me truly think for myself and not be influenced by the popular opinion.
</p>
<p class="">
	<span class="text-secondary"
		>It also makes me feel good to know I could have done it in an easier way</span
	>, but chose to think for myself - in a way it challenges me to do something hard just because.
</p>
<p class="">I will still use AI in some cases:</p>
<p class="">- Programming basic parts of applications is faster</p>
<p class="">
	- To help writing emails when I really don't feel like thinking (but as a conscious decision)
</p>
<p class="">- To use as a better Google for searching to answers for questions</p>
<p class="">
	But as the time flies by, I have realized something. <span class="text-secondary"
		>When it comes to deep thinking, a much better choice than AI is to just take a pen and paper
		and write your thoughts on there.</span
	>
	This forces you to stop and think about the problem -
	<strong>exactly the best headspace to realize something you would not realize otherwise</strong>.
</p>
