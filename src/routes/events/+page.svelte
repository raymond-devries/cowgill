<script>
	import eventsData from './events.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={eventsData.body} />
