<script>
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';
	import { onMount } from 'svelte';
	export let imgSrc;
	export let altText;

	let tagDom;
	const tag = pictureTag(imgSrc, altText);
	onMount(() => pictureLoaded(tagDom));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={tagDom}>{@html tag}</div>
