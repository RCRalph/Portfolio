import Vue from "vue";
import VueRouter from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";

Vue.use(VueRouter)

const routes = [
    { path: "/", component: HomeComponent },
	{ path: "/my-projects", component: ProjectsComponent },
	{ path: "/my-projects/:id", component: ProjectComponent },
	{ path: "/contact-me", component: ContactComponent },
]

export default new VueRouter({ routes })
