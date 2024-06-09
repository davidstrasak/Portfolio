<script>
	import posts from "../posts";
</script>

<h1 class="text-5xl mb-10 text-center">
	<p class="block text-secondary">Blog post navigation</p>
</h1>
<table class="w-full">
	<tbody>
		{#each posts as post}
			<tr>
				<td class="w-1/5">{post.date}</td>
				<td class="underline"><a href={post.href}>{post.title}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
