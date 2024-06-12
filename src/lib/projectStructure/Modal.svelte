<script lang="ts">
	export let modal: any = "0";
	export let id: number = 0;
	export let title: string = "Default";

	import Portal from "$lib/Portal.svelte";

	import ArduinoVest from "$lib/projectItems/ArduinoVest.svelte";
	import AutomaticWindow from "$lib/projectItems/AutomaticWindow.svelte";
	import PICvariety from "$lib/projectItems/PICvariety.svelte";
	import PiHole from "$lib/projectItems/PiHole.svelte";
	import StockSS from "$lib/projectItems/StockSS.svelte";
	import ThisWebsite from "$lib/projectItems/ThisWebsite.svelte";

	let components: { [key: string]: typeof ArduinoVest } = {
		ArduinoVest: ArduinoVest,
		AutomaticWindow: AutomaticWindow,
		PICvariety: PICvariety,
		PiHole: PiHole,
		StockSS: StockSS,
		ThisWebsite: ThisWebsite
	};
</script>

<!-- Put this part before </body> tag -->
<Portal>
	<input type="checkbox" id="my_modal_{id}" class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle" role="dialog">
		<div class="modal-box font-cyberpunk" style="">
			<h3 class="text-3xl font-bold text-secondary">{@html title}</h3>

			<p class="text-xl text-justify">
				<!-- Importing the modal components had to be done so unintuitively, because otherwise it would throw me an SSR error. -->
				<svelte:component this={components[modal]} />
			</p>
		</div>
		<label class="modal-backdrop" for="my_modal_{id}">Close</label>
	</div>
</Portal>

<!-- The button to open modal -->
<label for="my_modal_{id}" class="btn btn-lg btn-outline"> Read more </label>
