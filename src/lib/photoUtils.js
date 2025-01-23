import { avifImages, CMSimages, getImageKey, primaryColors, webpImages } from '$lib/CMSimages.js';

const loaded = (image) => {
	image.parentElement.removeAttribute('style');
	image.parentElement.parentElement.removeAttribute('style');
};

export const pictureTag = (imgSrc, altText, imgClass = '', containerClass = '', credit = '', creditLink = '') => {
	const resizeSrc = getImageKey(imgSrc);
	const loadingStyle = `background: rgba(${primaryColors[resizeSrc]}); background-repeat: no-repeat; background-size: cover; filter: blur(5px);`;
	const { src, width, height } = CMSimages[resizeSrc];
	const imgTag = `<img class="${imgClass}" src="${src}" alt="${altText}" style='aspect-ratio: ${width} / ${height}'/>`;
	const avifTag = `<source srcset="${avifImages[resizeSrc]}" type="image/avif" />`;
	const webpTag = `<source srcset="${webpImages[resizeSrc]}" type="image/webp" />`;
	const pictureTag = `<picture style='opacity: 0'>${avifTag}${webpTag}${imgTag}</picture>`;
	const creditTag = credit
		? `<a href='${creditLink}' class='opacity-60 m-2 text-xs p-1.5 bg-zinc-900 bg-opacity-50 rounded'>${credit}</a>`
		: '';
	const creditDiv = `<div class='absolute top-0 flex items-end justify-start w-full h-full'>${creditTag}</div>`;

	return `<div style='${loadingStyle}' class='relative w-full ${containerClass}'>${pictureTag}${creditDiv}</div>`;
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
