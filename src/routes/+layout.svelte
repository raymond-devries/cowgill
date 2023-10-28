<script>
	import './app.css';

	import IconEmail from '~icons/clarity/email-solid';
	import IconGoogleCalendar from '~icons/simple-icons/googlecalendar';
	import IconInstagram from '~icons/mdi/instagram';
	import IconLocation from '~icons/carbon/location-filled';
	import IconStrava from '~icons/bi/strava';
	import IconHamburger from '~icons/ci/hamburger-lg';

	import { page } from '$app/stores';
	import CowgillLogo from '$lib/CowgillLogo.svelte';
	import meta from './meta.json';


	import Photo from '$lib/Photo.svelte';

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];
</script>

<svelte:head>
	<title>🐮 Cowgill Trail Collective</title>
</svelte:head>

<body style="height: 100vh;" class="bg-zinc-900 text-white">
	<div class="relative overflow-hidden sm:h-80">
		<div class="absolute z-10 h-40 w-full bg-gradient-to-b from-zinc-900"></div>
		<div class="-inset-y-1/2 z-0 lg:absolute">
			<Photo imgSrc={meta.headerPhoto} altText={meta.headerPhotoAltText} maxWidth={null} />
		</div>
		<div class="absolute inset-x-5 inset-y-8 z-20 mx-auto max-w-screen-lg">
			<nav class="flex justify-between">
				<div
					class="max-w-[70px] duration-500 ease-in-out hover:max-w-[80px] sm:max-w-[90px] sm:hover:max-w-[100px] md:max-w-[120px] md:hover:max-w-[130px]"
				>
					<CowgillLogo />
				</div>
				<div>
					<div class="hidden sm:flex md:gap-7 lg:gap-10">
						{#each navLinks as link}
							<a
								class={($page.url.pathname === link[0] ? 'bg-pink text-zinc-800' : 'text-white sm:hover:mt-2') +
									' mt-3 px-5 py-3 duration-300 ease-in-out md:text-lg rounded-lg'}
								href={link[0]}>{link[1]}</a
							>
						{/each}
					</div>
				</div>
				<div class="sm:hidden">
					<IconHamburger class="text-4xl" />
				</div>
			</nav>
		</div>
	</div>
	<main class="mx-auto my-10 min-h-[60%] max-w-screen-lg">
		<div class="mx-4 sm:mx-8">
			<slot />
		</div>
	</main>
	<footer class="sticky bg-zinc-800 py-10 text-lg text-pink-100 md:text-xl">
		<div class="mx-auto max-w-screen-lg">
			<div class="mx-4 flex flex-col flex-wrap content-between justify-between gap-8 sm:mx-8 sm:flex-row">
				<div class="flex flex-col gap-3 md:gap-5">
					<a href="https://www.instagram.com/cowgilltrailcollective/" class="flex items-center gap-1">
						<IconInstagram />
						@cowgilltrailcollective</a
					>
					<a href="https://www.strava.com/clubs/470714" class="flex items-center gap-1">
						<IconStrava />
						Cowgill Trail Collective</a
					>
					<div class="flex items-center gap-1">
						<IconLocation />
						Seattle, WA
					</div>
				</div>
				<div class="flex flex-col gap-3 md:gap-5">
					<a href="mailto: cowgill.trail@gmail.com" class="flex items-center gap-1">
						<IconEmail />
						cowgill.trail@gmail.com</a
					>
					<a
						class="flex items-center gap-1"
						href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
						><IconGoogleCalendar />Calendar</a
					>
				</div>
				<div style="padding: 20px 10px">
					<CowgillLogo maxWidth="140px" />
				</div>
			</div>
		</div>
	</footer>
</body>
