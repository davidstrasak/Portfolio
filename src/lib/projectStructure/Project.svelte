<script>
	import Modal from "./Modal.svelte";
	import Label from "./Label.svelte";

	export let project = {
		id: 0,
		title: "0",
		description: "0",
		modal: "",
		image: "https://picsum.photos/800"
	};

	const { id, title, description, modal, image } = project;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<!-- <Label {id}> -->
		<img src={image} alt={image} height="0px" width="400px" class="mb-5" />
		<!-- </Label> -->
	</figure>
	<div class="card-body p-0 text-center">
		<h2 class="card-title text-3xl text-secondary">{@html title}</h2>
		<p class="text-2xl">{@html description}</p>
		<div class="card-actions justify-center"><Modal {modal} {id} {title}></Modal></div>
	</div>
</div>
