<script>
	import { page } from '$app/stores';

	let active = false;

	export let links;
	const [first, ...rest] = links;
</script>

<div class="relative inline-block text-left" on:mouseleave={() => (active = false)} role="button" tabindex="0">
	<div>
		<a
			class={($page.url.pathname === first[0] ? 'bg-pink bg-opacity-90 text-zinc-800' : 'text-white sm:hover:mt-2') +
				' mt-3 rounded-lg px-5 py-3 text-lg duration-300 ease-in-out lg:text-xl'}
			href={first[0]}
			on:mouseenter={() => (active = true)}>{first[1]}</a
		>
	</div>
	{#if active && rest.length > 0}
		<div class="mt-1">
			<div
				class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 text-white"
				role="menu"
				tabindex="-1"
			>
				<div class="py-1" role="none">
					{#each rest as link}
						<a href={link[0]} class="block px-4 py-2 text-lg" role="menuitem" tabindex="-1" id="menu-item-0"
							>{link[1]}</a
						>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
