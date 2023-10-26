<script>
	import eventsData from './events.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={eventsData.body} />

<svelte:head>
	<meta name="description" content={eventsData.metaDescription} />
</svelte:head>

<h3>We have a Google Calendar!</h3>
<div>
	<a
		href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
		role="button"
		style="margin: 10px 0px">View Calendar️</a
	>
	<a
		href="https://calendar.google.com/calendar/u/0?cid=Y293Z2lsbC50cmFpbEBnbWFpbC5jb20"
		role="button"
		style="margin: 10px 0px">Subscribe</a
	>
</div>
