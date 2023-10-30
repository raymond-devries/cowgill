<script>
	import { customHeaderImgSrc, customHeaderImgAltText } from '$lib/headerImage.js';
	import { onDestroy } from 'svelte';

	export let imgSrc;
	export let altText;

	$customHeaderImgSrc = imgSrc;
	$customHeaderImgAltText = altText;
	onDestroy(() => {
		$customHeaderImgSrc = null;
		$customHeaderImgAltText = null;
	});
</script>
