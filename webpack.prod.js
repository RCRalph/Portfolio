const config = require("./webpack.config");
const merge = require("webpack-merge").merge;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		})
	]
});