// Require dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const requestIp = require("request-ip");

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/dist/public"));
app.use(requestIp.mw());
app.use(cookieParser());
app.use(cookieSession({
	name: "session",                              
	secret: process.env.COOKIE_SESSION_SECRET,
	maxAge: 24 * 60 * 60 * 1000,
	sameSite: "lax",
	path: "/",
	httpOnly: true
}));

// Add routes
require("./controllers/darkmode")(app);
require("./controllers/routes")(app);
require("./controllers/api")(app);

// Error 404
app.use((req, res) => res.sendStatus(404));

// Listening
const port = process.env.APP_PORT;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});