<script>
	import { markdown } from '$lib/drawdown.js';
	export let content;

	const style = 'width: 100%; display: block; margin:auto; max-width: 800px;';
	const srcset = (source) => `srcset="${source}?nf_resize=fit&w=400 400w, ${source}?nf_resize=fit&w=800 800w"
	sizes="(max-width: 500px) 400px, 800px"`;
	const parsedContent = markdown(content, style, srcset);
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html parsedContent}
