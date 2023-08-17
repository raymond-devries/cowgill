<script>
	import { markdown } from '$lib/drawdown.js';
	export let content;
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html markdown(content)}
