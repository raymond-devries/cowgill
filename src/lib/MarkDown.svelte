<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	export let content;
	let markdownDom;

	const style = 'opacity: 0;';
	const srcset = (source) => {
		const srcset = `${source}?nf_resize=fit&w=800 800w, ${source}?nf_resize=fit&w=1600`;
		return `srcset="${srcset}" src="${source}"`;
	};

	const containerStyle = 'max-width: 800px; width: 100%; display: block; margin:auto; aspect-ratio: 20 / 9;';
	const containerStyleLoading = `${containerStyle} background: var(--primary); background-repeat: no-repeat; background-size: cover; filter: blur(10px);`;
	const parsedContent = markdown(content, style, srcset, containerStyleLoading);

	const loaded = (image) => {
		image.removeAttribute('style');
		image.parentElement.setAttribute('style', containerStyle);
	};
	onMount(() => {
		for (const image of markdownDom.getElementsByTagName('img')) {
			if (image.complete) {
				loaded(image);
			} else {
				image.addEventListener('load', () => loaded(image));
			}
		}
	});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={markdownDom}>{@html parsedContent}</div>
