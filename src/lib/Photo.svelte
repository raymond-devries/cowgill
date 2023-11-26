<script>
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';
	import { afterUpdate } from 'svelte';
	export let imgSrc;
	export let altText;

	export let containerClass;

	console.log(containerClass);

	let tagDom;
	$: tag = pictureTag(imgSrc, altText, $$props.class, containerClass);
	afterUpdate(() => pictureLoaded(tagDom));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={tagDom} class="h-full w-full">{@html tag}</div>
