<script>
	import aboutData from './about.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<svelte:head>
	<meta name="description" content={aboutData.metaDescription} />
</svelte:head>

<MarkDown content={aboutData.body} />
