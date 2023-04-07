const cache = require("memory-cache");

const validateToken = (req, res, next) => {
	if (req.body._token != req.session.csrf) {
		return res.sendStatus(403);
	}

	next();
};

const checkIPAddress = (req, res, next) => {
	const IP = req.clientIp, MILISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
	const cacheValue = cache.get(IP) + 1;

	if (cacheValue > process.env.MAX_REQUESTS) {
		return res.sendStatus(429);
	}

	cache.put(IP, cacheValue, MILISECONDS_IN_DAY);
	next();
};

const verifyCaptcha = (req, res, next) => {
	fetch("https://www.google.com/recaptcha/api/siteverify", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(Object.entries({
			secret: process.env.CAPTCHA_SECRET_KEY,
			response: req.body.captcha
		})).toString(),
	})
	.then(response => response.json())
	.then(data => {
		if (data.success && data.score > 0.5) {
			next();
		} else {
			res.sendStatus(401);
		}
	})
	.catch(err => {
		console.error(err);
		res.sendStatus(401);
	})
}

exports.validateToken = validateToken;
exports.checkIPAddress = checkIPAddress;
exports.verifyCaptcha = verifyCaptcha;
