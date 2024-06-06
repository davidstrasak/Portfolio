<script>
	import Modal from "./Modal.svelte";
	export let project = { title: "0", description: "0", modal: "0" };

	const { title, description, modal } = project;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title text-3xl">{title}</h2>
		<p class="text-2xl">{description}</p>
		<div class="card-actions justify-end">
			<Modal {modal} />
		</div>
	</div>
</div>
