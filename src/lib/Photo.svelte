<script>
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';
	import { onMount } from 'svelte';
	export let imgSrc;
	export let altText;
	export let maxWidth;

	let tagDom;
	const tag = pictureTag(imgSrc, altText, maxWidth, $$props.class);
	onMount(() => pictureLoaded(tagDom, maxWidth));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={tagDom} class='h-full w-full'>{@html tag}</div>
