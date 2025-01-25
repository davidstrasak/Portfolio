<script>
	export let post;

	const { date, title, description, image, href, tags } = post;
</script>

<div class="flex md:flex-row flex-col flex-nowrap mt-8 text-2xl items-center">
	<div class="m-0 sm:m-12">
		<img src={image} width="300px" height="300px" alt="text" class="rounded-xl" />
	</div>
	<div class="flextext m-5 ml-4 flex-1 p-5">
		<a {href} class="text-accent underline text-2xl font-bold">{title}</a>
		<p class="mt-8 text-justify text-xl">
			{@html description}
		</p>

		<div class="mt-8 block">
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
			<p class="text-secondary inline">{date}</p>
			<p>Tags: {tags}</p>
		</div>
	</div>
</div>
