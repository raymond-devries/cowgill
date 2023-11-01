<script>
	import eventsData from './events.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={eventsData.body} />

<svelte:head>
	<meta name="description" content={eventsData.metaDescription} />
	<title>🐮 Events</title>
</svelte:head>

<h3 class="mb-7 text-xl sm:text-3xl">We have a Google Calendar!</h3>
<div class="grid grid-cols-2 gap-6 text-lg">
	<a
		class="btn-pink"
		href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
		>View Calendar️</a
	>
	<a class="btn-pink" href="https://calendar.google.com/calendar/u/0?cid=Y293Z2lsbC50cmFpbEBnbWFpbC5jb20">Subscribe</a>
</div>
