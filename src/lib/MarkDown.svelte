<script>
	import { markdown } from '$lib/drawdown.js';
	export let content;

	const style = 'width: 100%; display: block; margin:auto; max-width: 800px;';
	const srcset = (source) => {
		const srcset = `${source}?nf_resize=fit&w=800 800w, ${source}?nf_resize=fit&w=1600`;
		return `srcset="${srcset}" src="${source}"`;
	};

	const parsedContent = markdown(content, style, srcset);
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html parsedContent}
