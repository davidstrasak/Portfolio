<script>
	import posts from "../posts";
</script>

<p class="block text-secondary text-5xl mb-10 text-center">Blog post navigation</p>

<table class="w-full">
	<tbody>
		{#each posts as post}
			<tr>
				<td class="w-1/4 text-center">{post.date} -></td>
				<td><a class="underline" href={post.href}>{post.title}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
