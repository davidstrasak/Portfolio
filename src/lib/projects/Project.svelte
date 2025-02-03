<script>
	import { base } from "$app/paths";
	export let project;
	export let reverse = false;
	export let insideProject = false;

	let systemancerRoute = `${base}/systemancer.svg`;

	const { completionDate, projectTitle, overview, thumbnail, demoLink, technologies } = project;
</script>

<div
	class="flex md:flex-row flex-col flex-nowrap my-2 items-center py-0 {insideProject
		? 'bg-white bg-opacity-5 rounded-xl'
		: 'hover:bg-white hover:bg-opacity-5 hover:rounded-xl'}  p-2"
	class:md:flex-row-reverse={reverse}
	class:md:flex-row={!reverse}
	role="article"
>
	<div class="m-0 sm:m-10">
		<img src={thumbnail} width="200px" height="200px" alt="text" class="rounded-xl" />
	</div>
	<div class="flex-1 p-10">
		<a
			href={demoLink}
			class="{insideProject
				? 'text-primary font-systemancer pointer-events-none'
				: 'text-accent underline font-bold'} text-2xl">{projectTitle}</a
		>
		<p class="text-xl">
			{@html overview}
		</p>
		<div class="flex flex-row space-x-2">
			<img
				src={systemancerRoute}
				alt="systemancer logo"
				height="20px"
				width="20px"
				style="filter: hue-rotate(120deg) brightness(2);"
			/>
			<p class="m-0"><span class="font-bold">Tech:</span> {technologies.join(", ")}</p>
		</div>
	</div>
</div>
