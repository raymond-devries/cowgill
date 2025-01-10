<script>
	import homeData from '$lib/content/seattle/home.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<svelte:head>
	<meta name="description" content={homeData.metaDescription} />
	<title>Cowgill Trail Collective</title>
</svelte:head>

<MarkDown content={homeData.body} />
