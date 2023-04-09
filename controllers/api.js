const requireText = require("require-text");
const validator = require("validator");

const middleware = require("./middleware");
const { sendMail } = require("./sendMail");

const markdownIt = require("markdown-it")
	({
		html: true,
		linkify: true,
		typographer: true
	})
	.use(require("markdown-it-attrs"), {
		leftDelimiter: "{",
		rightDelimiter: "}",
  		allowedAttributes: ["id", "class"]
	})
	.use(require("markdown-it-emoji"))

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

function getMarkdown(directory) {
	return markdownIt
		.render(addNoBreakSpaces(
			requireText(directory, require)
		));
}

module.exports = (app) => {
	app.get("/api/my-projects", (req, res) => {
		const projectsJson = require("../resources/json/projects.json")
			.map((item, id) => {
				const retObj = ({ title, thumbnail, tags, complexity } = item, { title, thumbnail, tags, complexity });
				retObj.id = id + 1;
				return retObj;
			})
			.sort((a, b) => b.complexity - a.complexity);

		return res.json(projectsJson);
	});

	app.get("/api/my-projects/:id", (req, res) => {
		const id = Number(req.params.id);
		const projectsJson = require("../resources/json/projects.json");
		if (!(0 <= id && id <= projectsJson.length)) {
			return res.sendStatus(404);
		}

		let project = (
			{ title, description, tags, github, deployment, gallery, directory } = projectsJson[id - 1],
			{ title, description, tags, github, deployment, gallery, directory }
		);

		project.tags = project.tags
			.map(item => item.split(" ").join("&nbsp;"))
			.join(", ");

		project.gallery = project.gallery
			.map(item => `/img/gallery/${project.directory}/${item}`);

		project.description = getMarkdown(
			`../dist/resources/markdown/descriptions/${project.description}.md`
		);

		return res.json(project);
	});

	app.post("/api/contact-me",
		middleware.validateToken,
		middleware.checkIPAddress,
		middleware.verifyCaptcha,
		async (req, res) => {
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
				return res.sendStatus(422);
			}

			const message = {
				from: process.env.TRANSPORTER_USER.trim(),
				to: process.env.TARGET_EMAIL.trim(),
				subject: body.topic.trim(),
				text: `Portfolio contact form message from ${body.name.trim()} <${body.email.trim()}>:\n${body.body.trim()}`
			};

			req.session.modalType = await sendMail(message);
			return res.sendStatus(200);
		}
	);
}
