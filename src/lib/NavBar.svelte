<script>
	import IconHamburger from '~icons/ci/hamburger-lg';

	import meta from '$lib/meta.json';
	import { page } from '$app/stores';
	import Photo from '$lib/Photo.svelte';
	import CowgillLogo from '$lib/CowgillLogo.svelte';
	import { customHeaderImgSrc, customHeaderImgAltText } from '$lib/headerImage.js';

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/events', 'Events'],
		['/contact', 'Contact']
	];
</script>

<div class="relative overflow-auto sm:h-72 xl:h-96">
	<div class="absolute z-10 h-40 w-full bg-gradient-to-b from-zinc-900"></div>
	<Photo
		imgSrc={$customHeaderImgSrc || meta.headerPhoto}
		altText={$customHeaderImgAltText || meta.headerPhotoAltText}
		class="h-full w-full object-cover"
	/>
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
								' mt-3 rounded-lg px-5 py-3 duration-300 ease-in-out md:text-lg'}
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
