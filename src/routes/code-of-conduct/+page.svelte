<script>
	import codeOfConduct from '$lib/content/common/code-of-conduct.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<svelte:head>
	<meta name="description" content={codeOfConduct.metaDescription} />
	<title>Code of Conduct</title>
</svelte:head>

<MarkDown content={codeOfConduct.body} />
