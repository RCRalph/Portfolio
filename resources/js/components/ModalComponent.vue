<template>
	<div class="modal-wrapper" v-if="value">
		<div class="popup" :class="hidePopup && 'hidden'">
			<div class="popup-content">
				<div class="svg-wrapper">
					<svg v-if="value == 200" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
						<circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
						<polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
					</svg>

					<svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
						<circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
						<line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
						<line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
					</svg>
				</div>

				<div class="message" v-html="message"></div>

				<button id="modal-button" @click="hide">OK</button>
			</div>

			<div class="popup-downbar" :class="widthShrink && 'width-shrink'"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: Number
	},
	data() {
		return {
			hidePopup: false,
			widthShrink: false
		}
	},
	computed: {
		message() {
			switch (this.value) {
				case 200: return "Message sent successfully!";
				case 401: return "Invalid captcha! Try again."
				case 403: return "Too many messages!<br>Try again tomorrow.";
				case 422: return "Invalid data! Try again.";
				default: return "Something went wrong. Try again."
			}
		}
	},
	methods: {
		hide() {
			this.hidePopup = true;
			setTimeout(() => this.$emit("input", 0), 1000);
		}
	},
	watch: {
		value() {
			if (this.value) {
				setTimeout(() => this.hide(), 5000);
				setTimeout(() => this.widthShrink = true, 100);
			}
		}
	}
}
</script>
