<script>
	export let post;
	export let reverse = false;
	export let insidePost = false;

	const { date, title, description, image, href, tags } = post;
</script>

<div
	class="flex md:flex-row flex-col flex-nowrap my-2 items-center {insidePost
		? 'bg-white bg-opacity-5 rounded-xl'
		: 'hover:bg-white hover:bg-opacity-5 hover:rounded-xl'}  p-2"
	class:md:flex-row-reverse={reverse}
	class:md:flex-row={!reverse}
	role="article"
>
	<div class="m-0 sm:m-10">
		<img src={image} width="200px" height="200px" alt="text" class="rounded-xl" />
	</div>
	<div class="flex-1 p-2">
		<a
			{href}
			class="{insidePost
				? 'text-primary font-systemancer pointer-events-none'
				: 'text-accent underline font-bold'} text-2xl">{title}</a
		>
		<p class="text-xl">
			{@html description}
		</p>

		<div class="block" class:hidden={insidePost}>
			<div class="flex flex-col md:flex-row md:space-x-4">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ADFFAD"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="inline"
						><path
							d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"
						/></svg
					>

					<p class="text-secondary inline m-0">{date}</p>
				</div>
				<p class="m-0"><span class="font-bold">Tags:</span> {tags.join(", ")}</p>
			</div>
		</div>
	</div>
</div>
