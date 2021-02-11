const requireText = require("require-text");
const { randomBytes } = require("crypto");
const validator = require("validator");

const markdownIt = require("markdown-it")
	({
		html: true,
		linkify: true,
		typographer: true
	})
	.use(require("markdown-it-sanitizer"));

const middleware = require("./middleware");
const { sendMail } = require("./sendMail");

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

		res.render("../dist/resources/pug/index.pug", {
			aboutMe
		});
	});

	// Projects
	app.get("/projects", (req, res) => {
		res.render("../dist/resources/pug/projects.pug");
	});

	// Project view
	app.get("/projects/:id", (req, res) => {
		const id = Number(req.params.id);
		const projectsJson = require("../resources/json/projects.json");
		if (!id || id > projectsJson.length) {
			return res.sendStatus(404);
		}

		let project = (
			{ title, description, tags, github, deployment, gallery } = projectsJson[id - 1],
			{ title, description, tags, github, deployment, gallery }
		);

		project.tags = project.tags
			.map(item => item.split(" ").join("&nbsp;"))
			.join(", ");

		project.description = markdownIt
			.render(addNoBreakSpaces(
				requireText(`../dist/resources/markdown/descriptions/${project.description}.md`, require)
			));

		res.render("../dist/resources/pug/project-view.pug", {
			project
		});
	});

	// Contact me
	app.route("/contact-me")
		.get((req, res) => {
			if (req.session.csrf == undefined) {
				req.session.csrf = randomBytes(100).toString("base64");
			}

			const modalType = req.session.modalType;
			delete req.session.modalType;

			return res.render("../dist/resources/pug/contact-me.pug", {
				token: req.session.csrf,
				modalType
			});
		})
		.post(
			middleware.validateToken,
			middleware.checkIPAddress,
			async (req, res) => {
				if (res.locals.requestLimitHit) {
					req.session.modalType = 419;
					return res.redirect("/contact-me");
				}

				const body = req.body;
				const validInput = [
					validator.isByteLength(body.name, {
						min: 1,
						max: 64
					}),
					validator.isByteLength(body.email, {
						min: 1,
						max: 64
					}),
					validator.isByteLength(body.topic, {
						min: 1,
						max: 128
					}),
					!validator.isEmpty(body.body),
					validator.isEmail(body.email),
				].reduce((item1, item2) => item1 && item2);

				if (!validInput) {
					req.session.modalType = 422;
					return res.redirect("/contact-me");
				}

				const message = {
					from: `"${body.name.trim()}" <${body.email.trim()}>`,
					to: process.env.TARGET_EMAIL.trim(),
					subject: body.topic.trim(),
					text: body.body.trim()
				};

				req.session.modalType = await sendMail(message);

				return res.redirect("/contact-me");
			}
		);
}