<script>
	import eventsData from './events.json';
	import MarkDown from '$lib/MarkDown.svelte';
</script>

<MarkDown content={eventsData.body} />

<svelte:head>
	<meta name="description" content={eventsData.metaDescription} />
</svelte:head>

<h3 class="mb-7 text-xl sm:text-3xl">We have a Google Calendar!</h3>
<div class="grid grid-cols-2 gap-6">
	<a
		class="w-full rounded-lg bg-pink py-5 text-center text-zinc-900"
		href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
		>View Calendar️</a
	>
	<a
		class="w-full rounded-lg bg-pink py-5 text-center text-zinc-900"
		href="https://calendar.google.com/calendar/u/0?cid=Y293Z2lsbC50cmFpbEBnbWFpbC5jb20">Subscribe</a
	>
</div>
