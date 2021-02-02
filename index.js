// Require dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(express.static(__dirname + "/dist/public"));
app.use(cookieParser());

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