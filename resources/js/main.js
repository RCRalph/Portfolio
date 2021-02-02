import "../scss/main.scss";
import "../img/favicon.ico";
import "../img/logo.png";
import "../json/particles.json";

// Dropdown menu
const bars = document.getElementById("burger-bars");
const menu = document.getElementById("menu-drop");
const pageContent = document.getElementById("page-content");
let showMenu = false;

const switchMenuDropOpenClosed = () => {
	if (showMenu) {
		pageContent.classList.remove("d-none", "d-lg-block");
		menu.classList.remove("open");
		bars.classList.remove("open");
		showMenu = false;
	}
	else {
		menu.classList.add("open");
		bars.classList.add("open");
		showMenu = true;

		setTimeout(() => {
			pageContent.classList.add("d-none", "d-lg-block");
		}, 1000)
	}
}

document.getElementById("burger")
	.addEventListener("click", switchMenuDropOpenClosed);

if (window.location.pathname == "/") {
	document.getElementById("about-me-tab-click")
		.addEventListener("click", switchMenuDropOpenClosed);
}

// Darkmode switcher

const switchDarkmode = (id) => {
	const darkmodeSwitcher = document.getElementById(id);
	document.body.classList.toggle("darkmode");

	darkmodeSwitcher.classList.toggle("light");
	darkmodeSwitcher.children[0].attributes["data-icon"].value = 
		darkmodeSwitcher.children[0].attributes["data-icon"].value == "moon" ? "sun" : "moon";
	
	const expirationDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
	const value = !document.body.classList.contains("darkmode");
	document.cookie = `lightmode=${value};expires=${expirationDate};SameSite=Strict`
};

document.getElementById("darkmode-switcher")
	.addEventListener(
		"click",
		() => switchDarkmode("darkmode-switcher")
	);

document.getElementById("darkmode-switcher-dropdown")
	.addEventListener(
		"click",
		() => switchDarkmode("darkmode-switcher-dropdown")
	);

// Particles.js
particlesJS.load("particles-js", "particles.json");