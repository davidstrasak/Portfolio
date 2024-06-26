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
		description: `<p>As you might see, I've recently published a static SvelteKit website (this website).</p>
	<p>
		Which is why I've decided to make this blog post - <span
			>to document all the steps that you can take in order to have a nice little static SvelteKit
			website</span
		>.
	</p>`,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1RzTzQFA_9h3qbValKOs0mjsATDkHwMOTA&s",
		href: `${base}/blog/how-to-host-a-static-sveltekit-website-for-free`,
		tags: ["SvelteKit", "GitHub"]
	}
];

export default posts;
