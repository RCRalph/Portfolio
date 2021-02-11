function darkmodeSwitcher() {
	const switchDarkmode = () => {
		const darkmodeSwitchers = [
			document.getElementById("darkmode-switcher"),
			document.getElementById("darkmode-switcher-dropdown")
		];
		document.body.classList.toggle("darkmode");

		const icon = darkmodeSwitchers[0].children[0]
			.attributes["data-icon"].value == "moon" ? "sun" : "moon";

		darkmodeSwitchers.forEach(item => {
			item.classList.toggle("light");
			item.children[0].attributes["data-icon"].value = icon;
		});
		
		const expirationDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
		const value = !document.body.classList.contains("darkmode");
		document.cookie = `lightmode=${value};expires=${expirationDate};SameSite=Strict;path=/`
	};

	document.getElementById("darkmode-switcher")
		.addEventListener(
			"click",
			switchDarkmode
		);

	document.getElementById("darkmode-switcher-dropdown")
		.addEventListener(
			"click",
			switchDarkmode
	);
}

exports.darkmodeSwitcher = darkmodeSwitcher;