<script>
	import '@picocss/pico';
	import './app.css';

	import IconInstagram from '~icons/mdi/instagram'
	import IconStrava from '~icons/bi/strava'
	import IconLocation from '~icons/carbon/location-filled'

	import { page } from '$app/stores';

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];
</script>

<body style='height: 100vh;'>
	<main class="container" style='min-height: 80vh'>
		<nav>
			<ul>
				<li>
					<img src="media/cowgill_white_logo.png" alt="Cowgill Logo" style="max-height: 60px" />
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
<footer style='position: sticky; top: 100vh; background-color: #1f2d38;'>
	<div class="container">
		<div style='display: flex; justify-content: space-between'>
		<aside>
			<nav>
				<ul>
					<li><a href='https://www.instagram.com/cowgilltrailcollective/'><IconInstagram></IconInstagram> @cowgilltrailcollective</a></li>
					<li><a href='https://www.strava.com/clubs/470714'><IconStrava></IconStrava> Cowgill Trail Collective</a></li>
					<li><IconLocation></IconLocation> Seattle, WA</li>
				</ul>
			</nav>
		</aside>
		<img src="media/cowgill_white_logo.png" alt='Cowgill Logo' style='max-height: 80px;'>
	</div>
	</div>
</footer>
</body>
