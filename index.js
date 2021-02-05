// Require dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/dist/public"));
app.use(cookieParser());
app.use(cookieSession({
	name: "session",                              
	secret: "EA1BDF6BD4D3B86D67D6DAF89E5D3",
	maxAge: 24 * 60 * 60 * 1000,
	sameSite: "lax",
	path: "/contact-me",
	secure: process.env.APP_ENV == "production",
	httpOnly: true
}));

// Add routes
const routes = require("./controllers/routes");
const middleware = require("./controllers/middleware");

middleware(app);
routes(app);
// Error 404
app.use(function (req, res) {
	return res.sendStatus(404);
});

// Listening
const port = process.env.APP_PORT;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});