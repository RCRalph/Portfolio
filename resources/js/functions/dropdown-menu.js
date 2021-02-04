function dropdownMenu() {
	const bars = document.getElementById("burger-bars");
	const menu = document.getElementById("menu-drop");

	const switchMenuDropOpenClosed = () => {
		menu.classList.toggle("open");
		bars.classList.toggle("open");
	}

	document.getElementById("burger")
		.addEventListener("click", switchMenuDropOpenClosed);

	if (window.location.pathname == "/") {
		document.getElementById("about-me-tab-click")
			.addEventListener("click", switchMenuDropOpenClosed);
	}
}

exports.dropdownMenu = dropdownMenu;