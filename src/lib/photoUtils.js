import { avifImages, CMSimages, primaryColors, webpImages } from '$lib/CMSimages.js';

const imgContainerStyle = 'max-width: 800px; width: 100%; display: block; margin:auto;';

const loaded = (image) => {
	image.parentElement.removeAttribute('style');
	image.parentElement.parentElement.setAttribute('style', imgContainerStyle);
};

export const pictureTag = (imgSrc, altText) => {
	const resizeSrc = `..${imgSrc}`;
	const loadingStyle = `background: rgba(${primaryColors[resizeSrc]}); background-repeat: no-repeat; background-size: cover; filter: blur(5px);`;
	console.log(CMSimages);
	const { src, width, height } = CMSimages[resizeSrc];
	const imgTag = `<img src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
	const avifTag = `<source srcset="${avifImages[resizeSrc]}" type="image/avif" />`;
	const webpTag = `<source srcset="${webpImages[resizeSrc]}" type="image/webp" />`;
	const pictureTag = `<picture style='opacity: 0'>${avifTag}${webpTag}${imgTag}</picture>`;
	return `<div style='${imgContainerStyle} ${loadingStyle}'>${pictureTag}</div>`;
};

export const pictureLoaded = (dom) => {
	for (const image of dom.getElementsByTagName('img')) {
		if (image.complete) {
			loaded(image);
		} else {
			image.addEventListener('load', () => loaded(image));
		}
	}
};
