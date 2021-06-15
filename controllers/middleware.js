const cache = require("memory-cache");

const validateToken = (req, res, next) => {
	if (req.body._token != req.session.csrf) {
		res.locals.invalidToken = true;
	}

	next();
};

const checkIPAddress = (req, res, next) => {
	const IP = req.clientIp;
	const MILISECONDS_IN_DAY = 24 * 60 * 60 * 1000;	
	const cacheValue = cache.get(IP) + 1;

	res.locals.requestLimitHit = cacheValue > process.env.MAX_REQUESTS;
	if (!res.locals.requestLimitHit) {
		cache.put(IP, cacheValue, MILISECONDS_IN_DAY);
	}

	next();
};

exports.validateToken = validateToken;
exports.checkIPAddress = checkIPAddress;