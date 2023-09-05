<script>
	import homeData from './home.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<svelte:head>
	<meta name="description" content={homeData.metaDescription} />
</svelte:head>

<MarkDown content={homeData.body} />
