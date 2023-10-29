<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';

	export let content;
	let markdownDom;

	const tag = (imgSrc, altText) => pictureTag(imgSrc, altText);

	const parsedContent = markdown(content, tag);
	onMount(() => pictureLoaded(markdownDom, null));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div class="typography" bind:this={markdownDom}>{@html parsedContent}</div>

<style>
	div :global(img) {
		@apply my-7;
	}
</style>
