const { randomBytes } = require("crypto");

module.exports = (app) => {
	app.get("/", (req, res) => {
		req.session.csrf = randomBytes(100).toString("base64");

		res.render("../dist/resources/index.pug", {
			token: req.session.csrf,
			captcha: process.env.CAPTCHA_SITE_KEY
		});
	});
}
