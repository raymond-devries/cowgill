<script>
	import MarkDown from '$lib/MarkDown.svelte';
	import { pageData } from '$lib/pageContent.js';

	const homeData = pageData[import.meta.env.VITE_CONTENT_KEY].HOME;
</script>

<svelte:head>
	<meta name="description" content={homeData.metaDescription} />
	<title>Cowgill Trail Collective</title>
</svelte:head>

<MarkDown content={homeData.body} />
