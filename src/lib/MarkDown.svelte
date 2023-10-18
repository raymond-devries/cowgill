<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	import { pictureTag, pictureLoaded } from '$lib/photoUtils.js';

	export let content;
	let markdownDom;

	const parsedContent = markdown(content, pictureTag);
	onMount(() => pictureLoaded(markdownDom));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={markdownDom}>{@html parsedContent}</div>
