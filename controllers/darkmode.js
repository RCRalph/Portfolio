module.exports = (app) => {
	const darkmode = (req, res, next) => {
		res.locals.darkmode = req.cookies.lightmode != "true";
		next();
	};

	app.use(darkmode);
}