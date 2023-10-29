<script>
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';
	import { afterUpdate } from 'svelte';
	export let imgSrc;
	export let altText;

	let tagDom;
	$: tag = pictureTag(imgSrc, altText, $$props.class);
	afterUpdate(() => pictureLoaded(tagDom));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={tagDom} class="h-full w-full">{@html tag}</div>
