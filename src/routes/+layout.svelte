<script>
	import '@picocss/pico';
	import './app.css';

	import IconEmail from '~icons/clarity/email-solid';
	import IconGoogleCalendar from '~icons/simple-icons/googlecalendar';
	import IconInstagram from '~icons/mdi/instagram';
	import IconLocation from '~icons/carbon/location-filled';
	import IconStrava from '~icons/bi/strava';

	import { page } from '$app/stores';

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];
</script>

<body style="height: 100vh;">
	<main class="container" style="min-height: 80vh">
		<nav>
			<ul>
				<li>
					<img src="assets/cowgill_white_logo.png?nf_resize=fit&w=150" alt="Cowgill Logo" style="max-height: 60px" />
				</li>
			</ul>
			<ul>
				{#each navLinks as link}
					<li>
						<a role={$page.url.pathname === link[0] ? 'button' : null} href={link[0]}>{link[1]}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<slot />
	</main>
	<footer style="position: sticky; top: 100vh; background: var(--card-background-color);">
		<div class="container">
			<div style="display: flex; justify-content: space-between; flex-wrap: wrap; align-content: space-between;">
				<aside style="padding: 10px">
					<nav>
						<ul>
							<li>
								<a href="https://www.instagram.com/cowgilltrailcollective/"><IconInstagram /> @cowgilltrailcollective</a
								>
							</li>
							<li><a href="https://www.strava.com/clubs/470714"><IconStrava /> Cowgill Trail Collective</a></li>
							<li><IconLocation /> Seattle, WA</li>
						</ul>
					</nav>
				</aside>
				<aside style="padding: 10px">
					<nav>
						<ul>
							<li><a href="mailto: cowgill.trail@gmail.com"><IconEmail /> cowgill.trail@gmail.com</a></li>
							<li>
								<a
									href="https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles"
									><IconGoogleCalendar /> Calendar</a
								>
							</li>
						</ul>
					</nav>
				</aside>
				<img
					src="assets/cowgill_white_logo.png?nf_resize=fit&w=150"
					alt="Cowgill Logo"
					style="max-height: 140px; padding: 20px 10px"
				/>
			</div>
		</div>
	</footer>
</body>
