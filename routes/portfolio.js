const markdownIt = require("markdown-it")({
	html: true,
	linkify: true,
	typographer: true
});
const requireText = require("require-text");

module.exports = (app) => {
	function addNoBreakSpaces(text) {
		text = text.split(" ");

		for (let i = text.length - 1; i > 0; i--) {
			if (text[i - 1].length == 1 && text[i - 1] != "#") {
				text[i] = text[i - 1] + "&nbsp;" + text[i];
				text.splice(i - 1, 1);
			}
		}

		return text.join(" ");
	}

	// Main page
	app.get("/", (req, res) => {
		const aboutMe = markdownIt
			.render(addNoBreakSpaces(
				requireText("../dist/resources/markdown/about-me.md", require)
			));

		res.render("../dist/resources/views/index.pug", {
			aboutMe: aboutMe
		});
	});

	// Projects
	app.get("/projects", (req, res) => {
		res.render("../dist/resources/views/projects.pug");
	});

	// Project view
	app.get("/projects/:id", (req, res) => {
		if (req.params.id > 5) {
			return res.sendStatus(404);
		}

		res.render("../dist/resources/views/project-view.pug");
	});

	// Contact me
	app.get("/contact-me", (req, res) => {
		res.render("../dist/resources/views/contact-me.pug");
	});
}