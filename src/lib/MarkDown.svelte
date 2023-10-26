<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';

	export let content;
	let markdownDom;

	const maxWidth = 800;

	const tag = (imgSrc, altText) => pictureTag(imgSrc, altText, maxWidth);

	const parsedContent = markdown(content, tag);
	onMount(() => pictureLoaded(markdownDom, maxWidth));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={markdownDom}>{@html parsedContent}</div>
