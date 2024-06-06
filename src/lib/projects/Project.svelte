<script>
	import Modal from "./Modal.svelte";
	import Label from "./Label.svelte";
	export let project = {
		id: 0,
		title: "0",
		description: "0",
		modal: "0",
		image: "https://picsum.photos/800"
	};

	const { id, title, description, modal, image } = project;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<Label {id}>
			<img src={image} alt={image} height="0px" width="400px" />
		</Label>
	</figure>
	<div class="card-body p-0 text-center">
		<Label {id}><h2 class="card-title text-3xl text-secondary">{title}</h2></Label>
		<Label {id}>
			<p class="text-2xl">{@html description}</p>
		</Label>
		<div class="card-actions justify-center"><Modal {modal} {id}></Modal></div>
	</div>
</div>
