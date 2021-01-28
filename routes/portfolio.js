module.exports = (app) => {
	// Main page
	app.get("/", (req, res) => {
		res.render("../views/index.pug");
	});

	// Projects
	app.get("/projects", (req, res) => {
		res.render("../views/projects.pug");
	});

	// Project view
	app.get("/projects/:id", (req, res) => {
		if (req.params.id > 5) {
			return res.sendStatus(404);
		}

		res.render("../views/project-view.pug");
	});

	// Contact me
	app.get("/contact-me", (req, res) => {
		res.render("../views/contact-me.pug");
	});
}