<script lang="ts">
	import "../app.css";
	import { base } from "$app/paths";
	import { afterUpdate, onMount } from "svelte";
	import info from "./projects/info";
	import { page } from "$app/stores";

	// BLOCK 1 - Scroll to top button listener
	let scrollY = 0;
	onMount(() => {
		const updateScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener("scroll", updateScroll);
		return () => window.removeEventListener("scroll", updateScroll);
	});

	// BLOCK 2 - Getting current year for the copyright
	const year = new Date().getFullYear();

	// BLOCK 3 - Setting the height of the entire website so that the footer is always in the proper place
	// These variables are bound to svelte HTML components
	let wallOfText: any; // Variable that holds the contents of the page
	let headerObject: any; // Variable that holds the header
	let footerObject: any; // Variable that holds the footer
	let entireHeight: string; // This is set as the height of the website
	let headerHeight: string; // This is set as the start of the page content, because the header has fixed positioning
	function setBoundaries() {
		entireHeight =
			wallOfText.clientHeight + headerObject.clientHeight + footerObject.clientHeight + 10 + "px";
		headerHeight = headerObject.clientHeight + "px";
	}
	onMount(() => {
		addEventListener("resize", setBoundaries);
		return () => {
			window.removeEventListener("resize", setBoundaries); // cleanup
		};
	});
	afterUpdate(() => {
		if (wallOfText) {
			setBoundaries();
		}
	});

	// BLOCK 4 - Toggling the navbar
	// Navbar should be toggleable on smaller screens and should be always visible on bigger screens
	let setInvis: string; // This holds the "invisible" class for the navbar
	let buttonInvis: string = "invisible"; // This holds the "invisible" class for the toggle button
	let fadeIn: string = "fade-in"; // This holds the "fade-in" class for the button
	let backgroundObject: any; // This holds the part of the navbar that has the black background

	function toggleButtonVisibility() {
		if (window.innerWidth <= 824) {
			buttonInvis = "";
			if (setInvis === "invisible") {
				if ((backgroundObject.style.height = "192px")) {
					backgroundObject.style.height = "0px";
				}
			} else if (setInvis === "") {
				if ((backgroundObject.style.height = "0px")) {
					backgroundObject.style.height = "192px";
				}
			}
		} else if (window.innerWidth > 824) {
			buttonInvis = "invisible";
			setInvis = "";
			if ((backgroundObject.style.height = "192px")) {
				backgroundObject.style.height = "0px";
			}
		}
	}
	function toggleMenu() {
		// This function is used when the navbar button is clicked

		if (window.innerWidth <= 824) {
			toggleButtonVisibility();
			if (setInvis === "") {
				setInvis = "invisible";
				backgroundObject.style.height = "0px";
			} else if (setInvis === "invisible") {
				setInvis = "";
				backgroundObject.style.height = "192px";
			}
		} else if (window.innerWidth > 824) {
			toggleButtonVisibility();
			setInvis = "";
			backgroundObject.style.height = "0px";
		}
	}
	onMount(() => {
		backgroundObject = headerObject.firstChild.lastChild;
		setInvis = "invisible";
		toggleMenu();

		addEventListener("resize", toggleButtonVisibility);
		window.scrollTo({ top: 0, behavior: "smooth" });

		setTimeout(() => {
			// This removes the fade-in class from the button after 2 seconds, because otherwise it would fade on click
			fadeIn = "";
		}, 2000);

		return () => {
			window.removeEventListener("resize", toggleButtonVisibility);
		};
	});

	//BLOCK 5 - Typewriter effect for the name
	let typewriter: string;
	typewriter = "typewriter";
	onMount(() => {
		setTimeout(() => {
			typewriter = "vanillaTypewriter";
		}, 2000);
	});
</script>

<div
	class="flex flex-col min-h-screen container mx-auto w-4/5 lg:w-3/5 text-2xl font-cyberpunk selection:bg-secondary selection:text-black"
	style="height: {entireHeight};"
>
	<header
		class="fixed md:pt-10 pb-5 w-full md:w-4/5 lg:w-3/5 z-10 font-bold md:bg-base-100"
		bind:this={headerObject}
	>
		<div class="flex flex-col md:flex-row justify-between items-left">
			<!-- Name -->

			<div class="bg-base-100">
				<div class="flex items-center flex-row pl-2">
					<button class="btn btn-ghost btn-lg text-3xl inline">
						{#key $page.url.pathname}
							<a href={`${base}/`} class=" inline">
								<div class={typewriter}>SYSTEMANCER</div>
							</a>
						{/key}
					</button>
					<button
						class="btn btn-lg btn-ghost inline {fadeIn} {buttonInvis}"
						on:click={() => {
							toggleMenu();
						}}
						><svg
							fill="#00ff00"
							clip-rule="evenodd"
							fill-rule="evenodd"
							stroke-linejoin="round"
							stroke-miterlimit="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							height="50"
							width="50"
							><path
								d="m21 17.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
								fill-rule="nonzero"
							/></svg
						></button
					>
				</div>
			</div>

			<!-- Rest of the navbar -->
			<nav class="md:items-left fade-in bg-base-100 {setInvis}">
				<ul class="flex flex-col md:flex-row space-x-0 md:space-x-10 md:space-y-0 items-left">
					<li>
						<button class="btn btn-ghost btn-lg text-3xl">
							{#key $page.url.pathname}
								<a href={`${base}/blog`} class="p-2"> Blog </a>
							{/key}
						</button>
					</li>
					<li>
						<button class="btn btn-ghost btn-lg text-3xl">
							{#key $page.url.pathname}
								<a href={`${base}/projects`} class="p-2"> Projects </a>
							{/key}
						</button>
					</li>
					<li>
						<button class="btn btn-ghost btn-lg text-3xl no-animation">
							{#key $page.url.pathname}
								<a href={`${base}/CV`} class="p-2"> CV </a>
							{/key}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<div class="relative fade-in" bind:this={wallOfText} style="top: {headerHeight};">
		<slot />
	</div>

	<button
		class="fixed bottom-20 md:bottom-10 right-10 btn btn-primary btn-md z-0 hidden md:block fade-in"
		class:invisible={scrollY === 0}
		on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		Scroll to Top
	</button>

	<footer
		class="mt-auto order-1 footer items-center p-4 text-primary bg-base flex z-10 fade-in"
		bind:this={footerObject}
	>
		<!-- mt-60 -->
		<aside class="items-center justify-start grid-flow-col flex-grow">
			<svg
				width="36"
				height="36"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				class="fill-current"
			>
				<path
					d="M20.025 16c2.196.014 3.975 1.801 3.975 4 0 2.208-1.793 4-4 4h-16c-2.208 0-4-1.792-4-4s1.792-4 4-4h16.025zm-15.525 2.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm.5-3.5h-16v-15h6v6h4v-6h6v15zm-2-4h-3.895v2h3.895v-2z"
				/>
				<!-- <path
					d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
				></path> -->
			</svg>
			<p class="pl-10">Designed and developed by: David Strasak © {year}</p>
		</aside>
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<p>Let's get in touch:</p>
			<a href="https://www.github.com/davidstrasak/" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
			</a>
			<a href="https://www.linkedin.com/in/davidstrasak/" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/>
				</svg>
			</a>
		</nav>
	</footer>

	{#each Object.values(info) as proj}
		<link rel="prefetch" href={proj.image} as="image" />
	{/each}
	<link rel="prefetch" href="{base}/CV_David_Strasak.jpg" as="image" />
	<link rel="prerender" href="{base}/" />
	<link rel="prerender" href="{base}/projects" />
	<link rel="prerender" href="{base}/CV" />
	<link rel="prerender" href="{base}/blog" />
</div>

<style>
	@media (max-width: 768px) {
		header {
			left: 0;
		}
	}
	@media (max-width: 824px) {
		header {
			width: 100%;
		}
	}
</style>
