<script>
	import posts from "../posts";
</script>

<p class="block text-primary text-4xl mb-10 text-center font-systemancer">Blog post navigation</p>

<table class="w-full md:text-xl">
	<tbody>
		{#each posts as post}
			<tr>
				<td class="w-1/4 text-center">{post.date} -></td>
				<td><a class="underline text-accent" href={post.href}>{post.title}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
