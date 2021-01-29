const config = require("./webpack.config");
const merge = require("webpack-merge").merge;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: "development",
	output: {
		filename: "[name].js",
		path: __dirname + "/public"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
});