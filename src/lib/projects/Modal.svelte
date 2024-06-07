<script lang="ts">
	export let modal: string = "Default text";
	export let id: number = 0;
	export let title: string = "Default";
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_{id}" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle" role="dialog">
	<div class="modal-box" style="width: 1500px;">
		<h3 class="text-3xl font-bold">{title}</h3>

		<p class="text-xl mt-4">
			{@html modal}
		</p>
	</div>
	<label class="modal-backdrop" for="my_modal_{id}">Close</label>
</div>

<!-- The button to open modal -->
<label for="my_modal_{id}" class="btn"> Read more </label>
