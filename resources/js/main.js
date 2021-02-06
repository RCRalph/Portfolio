import "../scss/main.scss";
import "../img/favicon.ico";
import "../img/logo.png";

import "../json/particles.json";

import { dropdownMenu } from "./functions/dropdown-menu.js";
import { darkmodeSwitcher } from "./functions/darkmode-switcher.js";
import { modal } from "./functions/modal.js";

dropdownMenu();
darkmodeSwitcher();

// Particles.js
if (document.getElementById("particles-js")) {
	particlesJS.load("particles-js", "particles.json");
}

modal();