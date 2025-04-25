<script>
	import MarkDown from '$lib/MarkDown.svelte';
	import valuesData from '$lib/content/common/values.json';
</script>

<svelte:head>
	<meta name="description" content={valuesData.metaDescription} />
	<title>About</title>
</svelte:head>

<MarkDown content={valuesData.body} />
