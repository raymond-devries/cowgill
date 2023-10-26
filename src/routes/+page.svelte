<script>
	import homeData from './home.json';
	import MarkDown from '$lib/MarkDown.svelte';
	import { headerImgSrc, headerImgAltText } from '$lib/headerImage.js';

	$headerImgSrc = homeData.headerImage;
	$headerImgAltText = homeData.headerImageAltText;
</script>

<svelte:head>
	<meta name="description" content={homeData.metaDescription} />
</svelte:head>

<MarkDown content={homeData.body} />
