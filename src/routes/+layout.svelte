<script>
	import '@picocss/pico';
	import './app.css';

	import { page } from '$app/stores';

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];
</script>

<body>
	<main class="container">
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
</body>
