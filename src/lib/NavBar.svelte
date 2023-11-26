<script>
	import IconHamburger from '~icons/ci/hamburger-lg';
	import IconX from '~icons/octicon/x-24';
	import IconInstagram from '~icons/mdi/instagram';
	import IconStrava from '~icons/bi/strava';

	import meta from '$lib/meta.json';
	import { page } from '$app/stores';
	import Photo from '$lib/Photo.svelte';
	import CowgillLogo from '$lib/CowgillLogo.svelte';
	import { customHeaderImgSrc, customHeaderImgAltText } from '$lib/headerImage.js';
	import { STRAVA_LINK, INSTAGRAM_LINK } from '$lib/constants.js';

	let mobileMenu = true;

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];

	$: {
		$page.url.pathname;
		mobileMenu = false;
	}
</script>

<div class="relative h-96 overflow-auto">
	<div class="absolute z-10 h-40 w-full bg-gradient-to-b from-zinc-900"></div>
	<Photo
		imgSrc={$customHeaderImgSrc || meta.headerPhoto}
		altText={$customHeaderImgAltText || meta.headerPhotoAltText}
		class="h-full w-full object-cover"
		containerClass="h-full"
	/>
	<div class="absolute inset-x-5 inset-y-8 z-20 mx-auto max-w-screen-lg">
		<nav class="flex justify-between">
			<div class="h-20">
				<a href="/">
					<CowgillLogo
						class="max-w-[70px] duration-500 ease-in-out hover:max-w-[80px] sm:max-w-[90px] sm:hover:max-w-[100px] md:max-w-[120px] md:hover:max-w-[130px]"
					/>
				</a>
			</div>
			<div>
				<div class="hidden sm:flex md:gap-7 lg:gap-10">
					{#each navLinks as link}
						<a
							class={($page.url.pathname === link[0]
								? 'bg-pink bg-opacity-90 text-zinc-800'
								: 'text-white sm:hover:mt-2') +
								' mt-3 rounded-lg px-5 py-3 duration-300 ease-in-out md:text-lg lg:text-xl'}
							href={link[0]}>{link[1]}</a
						>
					{/each}
				</div>
			</div>
			<div class="sm:hidden">
				<button on:click={() => (mobileMenu = true)}><IconHamburger class="text-4xl" /></button>
			</div>
		</nav>
		<div class="mt-1 flex flex-col items-center gap-6 sm:mt-10" class:hidden={$page.url.pathname !== '/'}>
			<p class="rounded-xl text-center text-4xl font-bold drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)] md:text-5xl">
				COWGILL TRAIL COLLECTIVE
			</p>
			<div class="flex gap-5 text-zinc-900 sm:text-lg md:gap-10 lg:gap-20 lg:text-xl">
				<a
					href={STRAVA_LINK}
					class="flex h-12 w-40 items-center justify-center gap-2 rounded-lg bg-pink-500 bg-opacity-95 sm:h-16 md:w-56 lg:w-80"
					><IconStrava />Strava</a
				>
				<a
					href={INSTAGRAM_LINK}
					class="flex h-12 w-40 items-center justify-center gap-2 rounded-lg bg-pink-500 bg-opacity-95 sm:h-16 md:w-56 lg:w-80"
					><IconInstagram />Instagram</a
				>
			</div>
		</div>
	</div>
</div>

<div
	class="fixed inset-0 z-30 bg-zinc-700 bg-opacity-80 backdrop-blur"
	class:hidden={!mobileMenu}
	role="presentation"
	on:click={() => (mobileMenu = false)}
></div>
<div
	class={`fixed right-0 top-0 z-40 flex h-full min-w-[75%] items-start bg-zinc-800 transition duration-150 ease-out ${
		!mobileMenu ? 'translate-x-full' : 'translate-x-0'
	}`}
>
	<div class="mx-6 my-8 grid w-full grid-cols-1 gap-7 text-xl">
		<div class="flex justify-between">
			<a href="/"><CowgillLogo class="max-w-[90px]" /></a>
			<button on:click={() => (mobileMenu = false)}><IconX height="50" width="50" /></button>
		</div>
		{#each navLinks as link}
			<a
				class={($page.url.pathname === link[0] ? 'bg-pink text-zinc-800' : 'bg-zinc-700') +
					' w-full rounded-lg px-5 py-3'}
				href={link[0]}>{link[1]}</a
			>
		{/each}
	</div>
</div>
