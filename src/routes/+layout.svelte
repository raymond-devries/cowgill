<script>
	import './app.css';

	import IconEmail from '~icons/clarity/email-solid';
	import IconGoogleCalendar from '~icons/simple-icons/googlecalendar';
	import IconInstagram from '~icons/mdi/instagram';
	import IconLocation from '~icons/carbon/location-filled';
	import IconStrava from '~icons/bi/strava';

	import { page } from '$app/stores';
	import CowgillLogo from '$lib/CowgillLogo.svelte';

	import { headerImgSrc, headerImgAltText } from '$lib/headerImage.js';
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

<body style="height: 100vh;" class="bg-gray-950 text-white">
	<div class="relative overflow-hidden sm:h-80">
		{#if $headerImgSrc && $headerImgAltText}
			<div class="-inset-y-1/2 lg:absolute">
				<Photo imgSrc={$headerImgSrc} altText={$headerImgAltText} maxWidth={null} />
			</div>
		{/if}
		<div class="absolute inset-x-5 inset-y-5 md:inset-x-52 xl:inset-x-96">
			<nav class="flex justify-between">
				<ul>
					<li>
						<CowgillLogo maxWidth="70px" />
					</li>
				</ul>
				<ul class="flex gap-3">
					{#each navLinks as link}
						<li>
							<a role={$page.url.pathname === link[0] ? 'button' : null} href={link[0]}>{link[1]}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
	<main style="min-height: 80vh" class="container mx-auto min-h-screen">
		<slot />
	</main>
	<footer style="position: sticky; top: 100vh; background: var(--card-background-color);">
		<div>
			<div style="display: flex; justify-content: space-between; flex-wrap: wrap; align-content: space-between;">
				<aside style="padding: 10px">
					<nav>
						<ul>
							<li>
								<a href="https://www.instagram.com/cowgilltrailcollective/">
									<IconInstagram />
									@cowgilltrailcollective</a
								>
							</li>
							<li>
								<a href="https://www.strava.com/clubs/470714">
									<IconStrava />
									Cowgill Trail Collective</a
								>
							</li>
							<li>
								<IconLocation />
								Seattle, WA
							</li>
						</ul>
					</nav>
				</aside>
				<aside style="padding: 10px">
					<nav>
						<ul>
							<li>
								<a href="mailto: cowgill.trail@gmail.com">
									<IconEmail />
									cowgill.trail@gmail.com</a
								>
							</li>
							<li>
								<a
									href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
								>
									<IconGoogleCalendar />
									Calendar</a
								>
							</li>
						</ul>
					</nav>
				</aside>
				<div style="padding: 20px 10px">
					<CowgillLogo maxWidth="140px" />
				</div>
			</div>
		</div>
	</footer>
</body>
