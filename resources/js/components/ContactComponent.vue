<template>
	<div class="container">
		<div class="row">
			<div class="contact-wrapper">
				<div class="contact">
					<div class="contact-text">
						Get in touch!
					</div>
				</div>

				<div class="form-wrapper">
					<form @submit="submit">
						<input
							v-model="data.name"
							name="name"
							type="text"
							placeholder="Your name..."
							maxlength="64"
							required
						>

						<input
							v-model="data.email"
							name="email"
							type="email"
							placeholder="Your email..."
							maxlength="64"
							required
						>

						<input
							v-model="data.topic"
							name="topic"
							type="text"
							placeholder="Your topic..."
							maxlength="128"
							required
						>

						<textarea
							v-model="data.body"
							name="body"
							rows="5"
							placeholder="Your message..."
							required
						></textarea>

						<button
							type="submit"
							:disabled="disableSubmit"
						>Submit</button>
					</form>
				</div>

				<hr>

				<div class="social-media">
					<div class="social-media-text">
						Also check out:
					</div>

					<div class="social-media-content">
						<div class="icons">
							<SocialMediaComponent></SocialMediaComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialMediaComponent from "./SocialMediaComponent.vue"

export default {
	components: {
		SocialMediaComponent,
	},
	props: {
		token: String,
		captcha: String,
	},
	data() {
		return {
			data: {
				name: "",
				email: "",
				topic: "",
				body: ""
			},
			submitted: false,
		}
	},
	computed: {
		disableSubmit() {
			if (this.submitted) {
				return true;
			}

			for (let i in this.data) {
				if (!this.data[i]) {
					return true;
				}
			}

			return false;
		}
	},
	methods: {
		submit(event) {
			event.preventDefault();
			this.submitted = true;

			grecaptcha.ready(() => {
				grecaptcha.execute(this.captcha, { action: "submit" }).then(token => {
					axios.post("/api/contact-me", {...this.data, _token: this.token, captcha: token})
						.then(response => this.$emit("status", response.status))
				});
			});
		}
	}
}
</script>
