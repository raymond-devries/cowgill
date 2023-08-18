<script>
	import contactData from './contact.json';
	import MarkDown from '$lib/MarkDown.svelte';

	let modal;

	const handleSubmit = (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => modal.show())
			.catch((error) => alert(error));
	};
</script>

<MarkDown content={contactData.body} />
<article>
	<h3>{contactData.formTitle}</h3>
	<form name="contact" method="POST" data-netlify="true" on:submit={handleSubmit}>
		<div class="grid">
			<label for="firstname">
				First name
				<input type="text" id="firstname" name="firstname" placeholder="First name" required />
			</label>
			<label for="lastname">
				Last name
				<input type="text" id="lastname" name="lastname" placeholder="Last name" required />
			</label>
		</div>
		<label for="email">Email address</label>
		<input type="email" id="email" name="email" placeholder="Email address" required />
		<label for="message">Message</label>
		<textarea type="text" id="message" name="message" placeholder="Message" rows="8" style="resize: vertical" />
		<small>We'll never share your email with anyone else.</small>
		<button type="submit">Submit</button>
	</form>
</article>

<dialog bind:this={modal}>
	<article>
		<MarkDown content={contactData.successMessage} />
		<footer>
			<a href="/" role="button">Home</a>
		</footer>
	</article>
</dialog>
