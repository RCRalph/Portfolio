module.exports = (app) => {
	// Main page
	app.get("/", (req, res) => {
		res.render("./dist/views/index.pug");
	});

	// Projects
	app.get("/projects", (req, res) => {
		res.render("./dist/views/projects.pug");
	});

	// Project view
	app.get("/projects/:id", (req, res) => {
		if (req.params.id > 5) {
			return res.sendStatus(404);
		}

		res.render("./dist/views/project-view.pug");
	});

	// Contact me
	app.get("/contact-me", (req, res) => {
		res.render("./dist/views/contact-me.pug");
	});
}