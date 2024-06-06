<script>
	import Modal from "./Modal.svelte";
	export let project = {
		id: 0,
		title: "0",
		description: "0",
		modal: "0",
		image: "https://picsum.photos/200"
	};

	const { id, title, description, modal, image } = project;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<img src={image} alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-3xl">{title}</h2>
		<p class="text-2xl">{description}</p>
		<div class="card-actions justify-end">
			<Modal {modal} {id} />
		</div>
	</div>
</div>
