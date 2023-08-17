<script>
	import aboutData from './about.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={aboutData.body} />
