const config = require("./webpack.config");
const merge = require("webpack-merge").merge;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new CleanWebpackPlugin()
	],
});