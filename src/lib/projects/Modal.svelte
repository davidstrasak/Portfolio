<script>
	export let modal = "0";
	export let id = 0;
</script>

<!-- The button to open modal -->
<label for="my_modal_{id}" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_{id}" class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">This modal works with a hidden checkbox!</p>
		<p>
			{@html modal}
		</p>
	</div>
	<label class="modal-backdrop" for="my_modal_{id}">Close</label>
</div>
