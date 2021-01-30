// Require dependencies
const express = require("express");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(express.static(__dirname + "/dist/public"));

// Add routes
const portfolioRoutes = require("./routes/portfolio");
portfolioRoutes(app);

// Error 404
app.use(function (req, res) {
	return res.sendStatus(404);
});

// Listening
const port = process.env.APP_PORT;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});