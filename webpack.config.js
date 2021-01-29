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
		new HtmlWebpackPlugin({
			filename: "../views/header.pug",
			template: "./resources/pug/header.pug",
			publicPath: "./public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "../views/footer.pug",
			template: "./resources/pug/footer.pug",
			publicPath: "./public",
			inject: false
		}),

		new HtmlWebpackPlugin({
			filename: "../views/index.pug",
			template: "./resources/pug/index.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "../views/projects.pug",
			template: "./resources/pug/projects.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "../views/project-view.pug",
			template: "./resources/pug/project-view.pug",
			publicPath: "",
		}),
		new HtmlWebpackPlugin({
			filename: "../views/contact-me.pug",
			template: "./resources/pug/contact-me.pug",
			publicPath: "",
		}),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new HtmlWebpackPugPlugin({
			adjustIndent: true
		}),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['./public/*', './views/*']
		}),
		new HtmlWebpackSkipAssetsPlugin(),
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
			{
				test: /\.ico$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
				}
			}
		]
	}
}