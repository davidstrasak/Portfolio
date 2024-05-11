<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Scroll button listener
	let scrollY = 0;
	onMount(() => {
		const updateScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', updateScroll);
		return () => window.removeEventListener('scroll', updateScroll);
	});

	// Enter key press listener
	onMount(() => {
		const enterPressed = (event: any) => {
			if (event.key === 'Enter') {
				goto(`${base}/projects`);
			}
		};
		window.addEventListener('keydown', enterPressed);
		return () => window.removeEventListener('keydown', enterPressed);
	});
</script>

<div class="container mx-auto w-4/5 lg:w-3/5 text-3xl font-cyberpunk">
	<header class="fixed md:pt-10 pb-5 w-4/5 lg:w-3/5 bg-base-100 z-10 font-bold">
		<div class="flex flex-col md:flex-row justify-between items-left">
			<!-- Name -->
			<div>
				<a href={`${base}`} class="p-2">
					<button class="btn btn-ghost btn-lg text-3xl"> DAVID </button>
				</a>
			</div>

			<!-- Rest of the navbar -->
			<nav class="md:items-left">
				<ul class="flex flex-col md:flex-row space-x-0 md:space-x-10 md:space-y-0 items-left">
					<li>
						<a href={`${base}/projects`} class="p-2">
							<button class="btn btn-ghost btn-lg text-3xl">Projects</button>
						</a>
					</li>
					<li>
						<a href={`${base}/CV`} class="p-2">
							<button class="btn btn-ghost btn-lg text-3xl">CV</button>
						</a>
					</li>
					<li>
						<a href={`${base}/about`} class="p-2">
							<button class="btn btn-ghost btn-lg text-3xl">About me</button>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div class="relative top-72 lg:top-48">
		<slot />
	</div>
	<button
		class="fixed bottom-10 right-10 btn btn-primary btn-md"
		class:invisible={scrollY === 0}
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		Scroll to Top
	</button>
</div>
