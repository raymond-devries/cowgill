<script>
	import homeData from './home.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={homeData.body} />
