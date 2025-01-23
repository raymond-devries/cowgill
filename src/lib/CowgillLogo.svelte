<script>
	import { CMSimages, avifImages, webpImages, getImageKey } from '$lib/CMSimages.js';
	import { pageData } from '$lib/pageContent.js';

	const metaData = pageData[import.meta.env.VITE_CONTENT_KEY].META;
	const resizeSrc = getImageKey(metaData.logo);
	const { src, width, height } = CMSimages[resizeSrc];
</script>

<picture>
	<source srcset={avifImages[resizeSrc]} type="image/avif" />
	<source srcset={webpImages[resizeSrc]} type="image/webp" />
	<img {src} alt="Cowgill Logo" class={`${$$props.class} aspect-[${width}-${height}]`} />
</picture>
