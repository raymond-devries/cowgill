<script>
	import MarkDown from '$lib/MarkDown.svelte';
	import { getCMSData } from '$lib/pageContent.js';

	const homeData = getCMSData('home');
</script>

<svelte:head>
	<meta name="description" content={homeData.metaDescription} />
	<title>Cowgill Trail Collective</title>
</svelte:head>

<MarkDown content={homeData.body} />
