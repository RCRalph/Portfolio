<template>
	<div>
		<div id="menu-drop" :class="dropdown && 'open'">
			<div class="menu-bar">
				<router-link to="/">
					<img src="/img/icon.svg" alt="Logo">
				</router-link>
			</div>

			<div class="list">
				<a role="button" href="https://storage.rcralph.me/rcralph/resume-rafal-chrzanowski-en.pdf" target="_blank">Resume</a>
				<hr>
				<router-link to="/my-projects">My projects</router-link>
				<hr>
				<router-link to="/contact-me">Contact me</router-link>
			</div>

			<div class="switcher">
				<div id="darkmode-switcher-dropdown" :class="!darkmode && 'light'" @click="switchTheme">
					<i :class="['fas', themeIcon]"></i>
				</div>
			</div>

			<div class="menu-icon-bar">
				<SocialMediaComponent></SocialMediaComponent>
			</div>
		</div>

		<nav>
			<router-link to="/">
				<img src="/img/icon.svg" alt="Logo">
			</router-link>

			<div class="d-flex">
				<ul>
					<a role="button" href="https://storage.rcralph.me/rcralph/resume-rafal-chrzanowski-en.pdf" target="_blank">Resume</a>
					<router-link to="/my-projects">My projects</router-link>
					<router-link to="/contact-me">Contact me</router-link>
				</ul>

				<div id="darkmode-switcher" :class="!darkmode && 'light'" @click="switchTheme">
					<i :class="['fas', themeIcon]"></i>
				</div>
			</div>
		</nav>

		<div class="dropdown-menu-bar">
			<a href="/">
				<img src="/img/icon.svg" alt="logo">
			</a>

			<div class="burger" id="burger" @click="dropdownToggle">
				<span id="burger-bars" class="burger-bars" :class="dropdown && 'open'"></span>
			</div>
		</div>
	</div>
</template>

<script>
import SocialMediaComponent from "./SocialMediaComponent.vue";

export default {
	components: {
		SocialMediaComponent
	},
	data() {
		return {
			darkmode: false,
			dropdown: false
		}
	},
	methods: {
		switchTheme() {
			this.darkmode = !this.darkmode;
			document.body.classList.toggle("darkmode");

			const expirationDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
			document.cookie = `lightmode=${!this.darkmode};expires=${expirationDate};SameSite=Strict;path=/`;
		},
		dropdownToggle() {
			this.dropdown = !this.dropdown;
		}
	},
	computed: {
		themeIcon() {
			return this.darkmode ? "fa-sun" : "fa-moon";
		},
	},
	mounted() {
		this.darkmode = document.body.classList.contains("darkmode");
	}
}
</script>
