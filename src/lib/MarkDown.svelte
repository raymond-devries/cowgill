<script>
	import { markdown } from '$lib/drawdown.js';
	import { onMount } from 'svelte';
	import { CMSimages } from '$lib/CMSimages.js';
	import { avifImages } from '$lib/CMSimages.js';
	import { webpImages } from '$lib/CMSimages.js';
	import { primaryColors } from '$lib/CMSimages.js';

	export let content;
	let markdownDom;

	const imgContainerStyle = 'max-width: 800px; width: 100%; display: block; margin:auto;';

	const pictureTag = (imgSrc, altText) => {
		const resizeSrc = `..${imgSrc}`;
		const loadingStyle = `background: rgba(${primaryColors[resizeSrc]}); background-repeat: no-repeat; background-size: cover; filter: blur(5px);`;
		console.log(loadingStyle);
		const { src, width, height } = CMSimages[resizeSrc];
		const imgTag = `<img src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
		const avifTag = `<source srcset="${avifImages[resizeSrc]}" type="image/avif" />`;
		const webpTag = `<source srcset="${webpImages[resizeSrc]}" type="image/webp" />`;
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
