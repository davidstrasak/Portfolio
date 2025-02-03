import { base } from "$app/paths";

interface post {
	date: string;
	title: string;
	description: string;
	image: string;
	href: string;
	tags: string[];
}

const posts: post[] = [
	{
		date: "12.06.2024",
		title: "How host a static SvelteKit website for free",
		description: `<p>Because of this website I now have lots of experience with static SvelteKit webpages.</p>
		 <p>And that is why I want to teach you how you too can create a nice static SvelteKit website (just like this one!) :).</p>
	<p>
		For this tutorial you will need <span>Node.js and npm</span>. You will also need a GitHub
		account, for the free hosting it provides to static websites.
	</p>`,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1RzTzQFA_9h3qbValKOs0mjsATDkHwMOTA&s",
		href: `${base}/blog/how-to-host-a-static-sveltekit-website-for-free`,
		tags: ["SvelteKit", "GitHub"]
	}
];

export default posts;
