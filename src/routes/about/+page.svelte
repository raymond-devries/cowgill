<script>
	import MarkDown from '$lib/MarkDown.svelte';
	import Photo from '$lib/Photo.svelte';
	import { getCMSData } from '$lib/pageContent.js';

	const aboutData = getCMSData('about');
</script>

<svelte:head>
	<meta name="description" content={aboutData.metaDescription} />
	<title>About</title>
</svelte:head>

<MarkDown content={aboutData.body} />
<hr class="my-10 h-0.5 rounded border-0 bg-zinc-600" />
<div class="typography text-center">
	<h2>Articles</h2>
</div>
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	{#each aboutData.articles as { link, title, photo }}
		<a href={link}>
			<div class="overflow-hidden rounded-xl bg-zinc-800">
				<header class="my-7 text-center text-lg"><b>{title}</b></header>
				<div class="relative h-60 w-full overflow-hidden md:h-72 lg:h-80">
					<Photo
						imgSrc={photo}
						altText={`${title} article cover photo`}
						class="absolute h-full w-full object-cover"
						containerClass="h-full"
					/>
				</div>
			</div>
		</a>
	{/each}
</div>
<hr class="my-10 h-0.5 rounded border-0 bg-zinc-600" />
<MarkDown content={aboutData.sponsorships} />
