<script>
	import eventsData from './events.json';
	import MarkDown from '$lib/MarkDown.svelte';
	import upcomingEvents from './upcoming_events.json';
	import IconStrava from '~icons/bi/strava';
	import CowgillLogo from '$lib/CowgillLogo.svelte';

	const formatDate = (dateString, timeZone = 'America/Los_Angeles') => {
		const date = new Date(dateString);
		const options = {
			weekday: 'short',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
			month: 'short',
			day: 'numeric',
			timeZone
		};

		// Format the date string and remove commas
		const formattedDate = date.toLocaleString('en-US', options).replace(/,/g, '');
		const [weekday, time, period, month, day] = formattedDate.split(' ');

		// Construct the final formatted string with AM/PM included
		return `${weekday} ${time} ${period.toUpperCase()} ${month} ${day}`;
	};
</script>

<h1 class="text-6xl">{eventsData.title}</h1>
<hr class="my-10 h-0.5 rounded border-0 bg-zinc-600" />

{#if upcomingEvents.length > 0}
	<h3 class="mb-5 text-4xl">Upcoming Events</h3>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each upcomingEvents as { id, title, upcoming_occurrences, route: { map_urls: { dark_url } } }}
			<a href={`https://www.strava.com/clubs/470714/group_events/${id}`}>
				<div class="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-800">
					<header class="my-5 px-8 text-lg lg:px-10">
						<div class="mb-2 flex items-center gap-x-2 sm:gap-x-4">
							<IconStrava class="flex-none sm:text-2xl"></IconStrava>
							<b class="md:text-xl">{title}</b>
						</div>
						<p class="text-sm sm:text-lg">{formatDate(upcoming_occurrences[0])}</p>
					</header>
					{#if dark_url}
						<div class="mt-auto w-full">
							<img src={dark_url} alt={`A map of ${title}`} class="w-full object-cover" />
						</div>
					{:else}
						<div class="mt-auto w-full h-[195.217px] bg-zinc-700">
							<CowgillLogo class="mx-auto px-5 my-5 max-h-[140px]"></CowgillLogo>
						</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
	<hr class="my-10 h-0.5 rounded border-0 bg-zinc-600" />
{/if}

<MarkDown content={eventsData.body} />

<svelte:head>
	<meta name="description" content={eventsData.metaDescription} />
	<title>Events</title>
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
