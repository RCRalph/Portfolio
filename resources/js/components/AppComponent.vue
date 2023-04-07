<template>
    <div>
        <NavbarComponent></NavbarComponent>

		<div class="container-fluid">
			<div id="particles-js"></div>

			<ModalComponent v-model="status"></ModalComponent>

			<div id="page-content">
				<router-view :token="token" :captcha="captcha" @status="updateStatus"></router-view>
			</div>
		</div>

        <footer>
            <div class="footer-text">
                <i class="fas fa-copyright"></i>&nbsp;{{ new Date().getFullYear() }} RCRalph
            </div>

            <div class="footer-social-media">
                <SocialMediaComponent></SocialMediaComponent>
            </div>
        </footer>
    </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import SocialMediaComponent from "./SocialMediaComponent.vue";

export default {
    components: {
        NavbarComponent,
        SocialMediaComponent,
		ModalComponent,
    },
	props: {
		token: String,
		captcha: String
	},
	data() {
		return {
			status: 0
		}
	},
	methods: {
		updateStatus(status) {
			this.status = status;
		}
	}
}
</script>
