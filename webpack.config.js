const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HtmlWebpackSkipAssetsPlugin } = require("html-webpack-skip-assets-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		main: "./resources/js/main.js",
		vendor: "./resources/js/vendor.js",
	},
	output: {
		filename: "[name].[contenthash].js",
		path: __dirname + "/public"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new HtmlWebpackPugPlugin({
			adjustIndent: true
		}),

		new HtmlWebpackPlugin({
			filename: "../views/index.pug",
			template: "./resources/pug/index.pug",
			title: "Main page"
		}),
		new HtmlWebpackPlugin({
			filename: "../views/projects.pug",
			template: "./resources/pug/projects.pug",
			title: "My projects"
		}),
		new HtmlWebpackPlugin({
			filename: "../views/project-view.pug",
			template: "./resources/pug/project-view.pug",
		}),
		new HtmlWebpackPlugin({
			filename: "../views/contact-me.pug",
			template: "./resources/pug/contact-me.pug",
			title: "Contact me"
		}),

		new HtmlWebpackSkipAssetsPlugin(),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
		]
	}
}