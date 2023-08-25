<script>
	import { src, width, height } from '../assets/cowgill_white_logo.png?as=metadata';
	import avif from '../assets/cowgill_white_logo.png?w=800;1600&format=avif&as=srcset';
	import webp from '../assets/cowgill_white_logo.png?w=800;1600&format=webp&as=srcset';
	export let maxWidth;
</script>

<picture>
	<source srcset={avif} type="image/avif" />
	<source srcset={webp} type="image/webp" />
	<img {src} alt="Cowgill Logo" style="aspect-ratio: {width} / {height}; max-width: {maxWidth}; width: 100%" />
</picture>
