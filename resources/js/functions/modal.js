function modal() {
	const popupDownbar = document.getElementsByClassName("popup-downbar");

	if (popupDownbar.length) {
		const popup = document.getElementsByClassName("popup")[0];

		document.getElementById("modal-button")
			.addEventListener("click", () => {
				popup.classList.add("hidden");

				setTimeout(() => {
					document
						.getElementById("modals")
						.parentNode
						.removeChild(document.getElementById("modals"));
				}, 1000)
			})

		popupDownbar[0].classList.add("width-shrink");
		setTimeout(() => {
			if (document.getElementsByClassName("popup").length && !popup.classList.contains("hidden")) {
				popup.classList.add("hidden");

				setTimeout(() => {
					popup.parentNode.removeChild(popup);
					document.getElementById("modals").style.display = "none";
				}, 1000);
			}
		}, 5000);


	}
}

exports.modal = modal;