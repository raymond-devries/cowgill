import { avifImages, CMSimages, primaryColors, webpImages } from '$lib/CMSimages.js';

const imgContainerStyleBase = 'width: 100%; display: block; margin:auto;';

const getImgContainerStyle = (maxWidth) =>
	maxWidth ? `${imgContainerStyleBase} max-width: ${maxWidth}px;` : imgContainerStyleBase;

const loaded = (image, maxWidth) => {
	image.parentElement.removeAttribute('style');
	image.parentElement.parentElement.setAttribute('style', getImgContainerStyle(maxWidth));
};

export const pictureTag = (imgSrc, altText, maxWidth) => {
	const resizeSrc = `..${imgSrc}`;
	const loadingStyle = `background: rgba(${primaryColors[resizeSrc]}); background-repeat: no-repeat; background-size: cover; filter: blur(5px);`;
	const { src, width, height } = CMSimages[resizeSrc];
	const imgTag = `<img src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
	const avifTag = `<source srcset="${avifImages[resizeSrc]}" type="image/avif" />`;
	const webpTag = `<source srcset="${webpImages[resizeSrc]}" type="image/webp" />`;
	const pictureTag = `<picture style='opacity: 0'>${avifTag}${webpTag}${imgTag}</picture>`;
	return `<div style='${getImgContainerStyle(maxWidth)} ${loadingStyle}'>${pictureTag}</div>`;
};

export const pictureLoaded = (dom, maxWidth) => {
	for (const image of dom.getElementsByTagName('img')) {
		if (image.complete) {
			loaded(image);
		} else {
			image.addEventListener('load', () => loaded(image, maxWidth));
		}
	}
};
