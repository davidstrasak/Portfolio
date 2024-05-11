<script>
	import '../app.css';
	import { base } from '$app/paths';
	console.log(base);
</script>

<div class="container mx-auto w-4/5 lg:w-3/5 text-3xl font-cyberpunk">
	<header class="fixed md:pt-10 pb-5 w-4/5 lg:w-3/5 bg-base-100 z-10 font-bold">
		<div class="flex flex-col md:flex-row justify-between items-left">
			<!-- Name -->
			<div>
				<a href={base} class="p-2">
					<button class="btn btn-ghost btn-lg text-3xl"> Bc. David Strašák </button>
				</a>
			</div>

			<!-- Rest of the navbar -->
			<nav class="md:items-left">
				<ul class="flex flex-col md:flex-row space-x-0 md:space-x-10 md:space-y-0 items-left">
					<li>
						<a href="{base}/projects" class="p-2"
							><button class="btn btn-ghost btn-lg text-3xl">Projects</button></a
						>
					</li>
					<li>
						<a href="{base}/CV" class="p-2"
							><button class="btn btn-ghost btn-lg text-3xl">CV</button></a
						>
					</li>
					<li>
						<a href="{base}/about" class="p-2"
							><button class="btn btn-ghost btn-lg text-3xl">About me</button></a
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<slot />
</div>
