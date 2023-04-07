import Vue from "vue";
import VueCarousel from 'vue-carousel';
import "../scss/main.scss"
import "../json/particles.json";

window.Vue = Vue;

const router = require("./router").default;
Vue.use(router);
Vue.use(VueCarousel);

Vue.component("app-component", require("./components/AppComponent.vue").default);

new Vue({ el: "#app", router });

if (document.getElementById("particles-js")) {
	particlesJS.load("particles-js", "/particles.json");
}
