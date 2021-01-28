const config = require("./webpack.config");
const merge = require("webpack-merge").merge;

module.exports = merge(config, {
	mode: "development"
});