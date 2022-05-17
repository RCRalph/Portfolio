import "../scss/main.scss";
import "../json/particles.json";
import "flickity/dist/flickity.min.css"

import { dropdownMenu } from "./functions/dropdown-menu.js";
import { darkmodeSwitcher } from "./functions/darkmode-switcher.js";
import { modal } from "./functions/modal.js";

dropdownMenu();
darkmodeSwitcher();

// Particles.js
if (document.getElementById("particles-js")) {
	particlesJS.load("particles-js", "/particles.json");
}

modal();