import Vue from "vue";

Vue.component("projects-component", require("./components/ProjectsComponent.vue").default);

const app = new Vue({
    el: '#page-content'
});