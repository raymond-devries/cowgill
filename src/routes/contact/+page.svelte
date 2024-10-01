<script>
	import contactData from './contact.json';
	import MarkDown from '$lib/MarkDown.svelte';
	import CustomHeaderImage from '$lib/CustomHeaderImage.svelte';

	let modal;

	const handleSubmit = (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => modal.show())
			.catch((error) => alert(error));
	};
</script>

<svelte:head>
	<meta name="description" content={contactData.metaDescription} />
	<title>Contact</title>
</svelte:head>

<CustomHeaderImage imgSrc={contactData.customHeaderPhoto} altText={contactData.customHeaderPhotoAltText} />

<div class="text-center">
	<MarkDown content={contactData.body} />
</div>
<div class="rounded-xl bg-zinc-800 p-5 sm:p-10">
	<p class="text-2xl font-bold">{contactData.formTitle}</p>
	<form
		name="contact"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		on:submit={handleSubmit}
		class="my-6 grid grid-cols-1 gap-3"
	>
		<input type="hidden" name="form-name" value="contact" />
		<div class="grid gap-3 md:grid-cols-2">
			<div>
				<label for="firstname" class="block">First name</label>
				<input type="text" id="firstname" name="firstname" placeholder="First name" />
			</div>
			<div>
				<label for="lastname" class="block">Last name</label>
				<input type="text" id="lastname" name="lastname" placeholder="Last name" />
			</div>
		</div>
		<div>
			<label for="email" class="block">Email address</label>
			<input type="email" id="email" name="email" placeholder="Email address" />
		</div>
		<div>
			<label for="message" class="block">Message</label>
			<textarea type="text" id="message" name="message" placeholder="Message" rows="8" required />
		</div>
		<small>We'll never share your email with anyone else.</small>
		<button type="submit" class="btn-pink sm:text-lg">Submit</button>
	</form>
</div>

<dialog class="relative z-20" bind:this={modal}>
	<div class="fixed inset-0 bg-zinc-700 bg-opacity-80 backdrop-blur"></div>
	<div class="fixed inset-0 z-30 w-screen overflow-y-auto">
		<div class="flex min-h-full items-center justify-center text-center">
			<div class="mx-8 rounded-2xl bg-zinc-800 p-8 pb-20">
				<MarkDown content={contactData.successMessage} />
				<a href="/" class="btn-pink inline-block w-full sm:text-lg">Home</a>
			</div>
		</div>
	</div>
</dialog>

<style lang="postcss">
	form input,
	textarea {
		@apply form-input w-full rounded-xl border-2 bg-zinc-700 py-3 placeholder-zinc-300 focus:border-pink focus:outline-none focus:ring-0;
	}

	form label {
		@apply mb-2 text-lg;
	}
</style>
