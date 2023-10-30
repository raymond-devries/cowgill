<script>
	import aboutData from './about.json';
	import MarkDown from '$lib/MarkDown.svelte';
	import Photo from '$lib/Photo.svelte';
</script>

<svelte:head>
	<meta name="description" content={aboutData.metaDescription} />
</svelte:head>

<MarkDown content={aboutData.body} />
<hr class="my-10 h-0.5 rounded border-0 bg-zinc-600" />
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	{#each aboutData.articles as { link, title, photo }}
		<a href={link}>
			<div class="h-96 overflow-hidden rounded-xl bg-zinc-800">
				<header class="my-7 text-center text-lg"><b>{title}</b></header>
				<Photo imgSrc={photo} altText={`${title} article cover photo`} class="h-full w-full object-cover" />
			</div>
		</a>
	{/each}
</div>
