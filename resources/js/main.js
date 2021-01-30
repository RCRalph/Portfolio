import "../scss/main.scss";
import "../img/favico.ico";
import "../img/logo.png";

const bars = document.getElementById("burger-bars");
const menu = document.getElementById("menu-drop");
let showMenu = false;

const switchMenuDropOpenClosed = () => {
	if (showMenu) {
		menu.classList.remove("open");
		bars.classList.remove("open");
		showMenu = false;
	}
	else {
		menu.classList.add("open");
		bars.classList.add("open");
		showMenu = true;
	}
}

document.getElementById("burger")
	.addEventListener("click", switchMenuDropOpenClosed);

if (window.location.pathname == "/") {
	document.getElementById("about-me-tab-click")
		.addEventListener("click", switchMenuDropOpenClosed);
}