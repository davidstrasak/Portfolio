import { base } from "$app/paths";

interface post {
	date: string;
	title: string;
	description: string;
	cleanDescription: string;
	image: string;
	href: string;
	tags: string[];
}

const posts: post[] = [
	{
		date: "03.02.2025",
		title: "How I launch any program on my PC in seconds",
		description: `<p class="">
	Ever since about 6 months ago I started experimenting with setting keyboard shortcuts on Windows.
	That leads up to today when I have my most efficient PC setup I've ever had and today I will share
	how to set it up with you.
</p>
<p class="">
	The setup is as easy as it can be and it can be set up in <strong>less than 15 minutes</strong>,
	but it can make your usage of the PC more effective and easier forever! :D
</p>`,
		cleanDescription:
			"Ever since about 6 months ago I was able to run almost any program on my PC by using a keyboard shortcut. That was the most efficient PC setup I've ever had and today I will share it with you. The setup is as easy as it can be and it can be set up in less than 15 minutes, but it can make your usage of the PC more effective and easier! :D",
		image: `${base}/images/blog/launch-any-program-in-seconds.webp`,
		href: `${base}/blog/launch-any-program-in-seconds`,
		tags: ["Windows OS", "AutoHotkey"]
	},
	{
		date: "12.06.2024",
		title: "How host a static SvelteKit website for free",
		description: `<p>Because of this website I now have lots of experience with static SvelteKit webpages.</p>
		 <p>And that is why I want to teach you how you too can create a nice static SvelteKit website - just like this one! :).</p>
	<p>
		For this tutorial you will need <span>Node.js and npm</span>. You will also need a GitHub
		account, for the free hosting it provides to static websites.
	</p>`,
		cleanDescription:
			"Because of this website I now have lots of experience with static SvelteKit webpages. And that is why I want to teach you how you too can create a nice static SvelteKit website - just like this one! :). For this tutorial you will need Node.js and npm. You will also need a GitHub account, for the free hosting it provides to static websites.",
		image: `${base}/images/blog/how-to-host-a-static-sveltekit-website-for-free.png`,
		href: `${base}/blog/how-to-host-a-static-sveltekit-website-for-free`,
		tags: ["SvelteKit", "GitHub"]
	}
];

export default posts;
