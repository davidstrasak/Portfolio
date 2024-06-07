<script lang="ts">
	export let modal: any = "0";
	export let id: number = 0;
	export let title: string = "Default";

	import ArduinoVest from "$lib/projectItems/ArduinoVest.svelte";

	let components: { [key: string]: typeof ArduinoVest } = {
		ArduinoVest: ArduinoVest
	};
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_{id}" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle" role="dialog">
	<div class="modal-box" style="width: 1500px;">
		<h3 class="text-3xl font-bold text-secondary">{@html title}</h3>

		<p class="text-xl mt-4 text-justify">
			<!-- Importing the modal components had to be done so unintuitively, because otherwise it would throw me an SSR error. -->
			<svelte:component this={components[modal]} />
		</p>
	</div>
	<label class="modal-backdrop" for="my_modal_{id}">Close</label>
</div>

<!-- The button to open modal -->
<label for="my_modal_{id}" class="btn"> Read more </label>
