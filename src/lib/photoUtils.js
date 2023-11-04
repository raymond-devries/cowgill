import { avifImages, CMSimages, primaryColors, webpImages } from '$lib/CMSimages.js';

const loaded = (image) => {
	image.parentElement.removeAttribute('style');
	image.parentElement.parentElement.removeAttribute('style');
};

export const pictureTag = (imgSrc, altText, cssClass = '', credit = '', creditLink = '') => {
	const resizeSrc = `..${imgSrc}`;
	const loadingStyle = `background: rgba(${primaryColors[resizeSrc]}); background-repeat: no-repeat; background-size: cover; filter: blur(5px);`;
	const { src, width, height } = CMSimages[resizeSrc];
	const imgTag = `<img class="${cssClass}" src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
	const avifTag = `<source srcset="${avifImages[resizeSrc]}" type="image/avif" />`;
	const webpTag = `<source srcset="${webpImages[resizeSrc]}" type="image/webp" />`;
	const pictureTag = `<picture style='opacity: 0'>${avifTag}${webpTag}${imgTag}</picture>`;
	const creditTag = credit
		? `<a href='${creditLink}' class='opacity-60 absolute top-0 m-2 text-xs p-1.5 bg-zinc-900 bg-opacity-50 rounded'>${credit}</a>`
		: '';
	return `<div style='${loadingStyle}' class='relative h-full'>${pictureTag}${creditTag}</div>`;
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
