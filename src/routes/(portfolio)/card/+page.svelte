<script>
	import Project from "$lib/projects/Project.svelte";
	import { base } from "$app/paths";
</script>

<div class="text-center justify-center items-center">
	<div class="avatar">
		<div class="w-48 rounded-full relative z-10">
			<img src="{base}/images/projects/me.jpg" alt="img" />
		</div>
	</div>

	<div class="flex gap-10 flex-col md:flex-row justify-center items-center md:items-start mb-14">
		<a
			href="https://www.linkedin.com/in/davidstrasak/"
			target="_blank"
			class="my-auto"
			aria-label="LinkedIn logo"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				class="fill-current m-10px"
			>
				<path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
				/>
			</svg>
		</a>
	</div>
</div>
