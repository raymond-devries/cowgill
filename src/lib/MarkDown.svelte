<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	import { images } from '$lib/images.js';
	import { avifImages } from '$lib/images.js';
	import { webpImages } from '$lib/images.js';
	export let content;
	let markdownDom;

	const imgContainerStyle = 'max-width: 800px; width: 100%; display: block; margin:auto;';
	const loadingStyle =
		'background: var(--primary); background-repeat: no-repeat; background-size: cover; filter: blur(10px);';

	const pictureTag = (imgSrc, altText) => {
		imgSrc = `..${imgSrc}`;
		const { src, width, height } = images[imgSrc];
		const imgTag = `<img src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
		const avifTag = `<source srcset="${avifImages[imgSrc]}" type="image/avif" />`;
		const webpTag = `<source srcset="${webpImages[imgSrc]}" type="image/webp" />`;
		const pictureTag = `<picture style='opacity: 0'>${avifTag}${webpTag}${imgTag}</picture>`;
		return `<div style='${imgContainerStyle} ${loadingStyle}'>${pictureTag}</div>`;
	};

	const parsedContent = markdown(content, pictureTag);

	const loaded = (image) => {
		image.parentElement.removeAttribute('style');
		image.parentElement.parentElement.setAttribute('style', imgContainerStyle);
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
