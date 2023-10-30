<script>
	import './app.css';

	import IconEmail from '~icons/clarity/email-solid';
	import IconGoogleCalendar from '~icons/simple-icons/googlecalendar';
	import IconInstagram from '~icons/mdi/instagram';
	import IconLocation from '~icons/carbon/location-filled';
	import IconStrava from '~icons/bi/strava';

	import CowgillLogo from '$lib/CowgillLogo.svelte';
	import NavBar from '$lib/NavBar.svelte';
</script>

<svelte:head>
	<title>🐮 Cowgill Trail Collective</title>
</svelte:head>

<body style="height: 100vh;" class="bg-zinc-900 text-white">
	<NavBar></NavBar>
	<main class="mx-auto my-10 min-h-[60%] max-w-screen-lg">
		<div class="mx-4 mb-16 sm:mx-8 md:mb-32">
			<slot />
		</div>
	</main>
	<footer class="sticky bg-zinc-800 py-10 text-lg text-pink-50 md:text-xl">
		<div class="mx-auto max-w-screen-lg">
			<div class="mx-4 flex flex-col flex-wrap content-between justify-between gap-8 sm:mx-8 sm:flex-row">
				<div class="flex flex-col gap-3 md:gap-5">
					<a href="https://www.instagram.com/cowgilltrailcollective/" class="flex items-center gap-1">
						<IconInstagram></IconInstagram>
						@cowgilltrailcollective</a
					>
					<a href="https://www.strava.com/clubs/470714" class="flex items-center gap-1">
						<IconStrava></IconStrava>
						Cowgill Trail Collective</a
					>
					<div class="flex items-center gap-1">
						<IconLocation></IconLocation>
						Seattle, WA
					</div>
				</div>
				<div class="flex flex-col gap-3 md:gap-5">
					<a href="mailto: cowgill.trail@gmail.com" class="flex items-center gap-1">
						<IconEmail></IconEmail>
						cowgill.trail@gmail.com</a
					>
					<a
						class="flex items-center gap-1"
						href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&amp;ctz=America/Los_Angeles"
						><IconGoogleCalendar></IconGoogleCalendar>Calendar</a
					>
				</div>
				<CowgillLogo class="max-w-[140px]"></CowgillLogo>
			</div>
		</div>
	</footer>
</body>
