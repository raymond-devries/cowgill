<script>
	import aboutData from './about.json';
	import MarkDown from '$lib/MarkDown.svelte';
	import Photo from '$lib/Photo.svelte';
</script>

<svelte:head>
	<meta name="description" content={aboutData.metaDescription} />
</svelte:head>

<MarkDown content={aboutData.body} />
<div class="grid">
	{#each aboutData.articles as article}
		<article>
			<header><a href={article.link} role="button" style="margin: 0 auto; display: block">{article.title}</a></header>
			<Photo imgSrc={article.photo} altText="Stuff" />
		</article>
	{/each}
</div>
