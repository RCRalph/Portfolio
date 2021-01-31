const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HtmlWebpackSkipAssetsPlugin } = require("html-webpack-skip-assets-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		vendor: "./resources/js/vendor.js",
		main: "./resources/js/main.js"
	},
	output: {
		path: __dirname + "/dist"
	},
	plugins: [
		// Pug components
		new HtmlWebpackPlugin({
			filename: "./resources/views/head.pug",
			template: "./resources/pug/head.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/footer.pug",
			template: "./resources/pug/footer.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/navbar.pug",
			template: "./resources/pug/navbar.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/menu-drop.pug",
			template: "./resources/pug/menu-drop.pug",
			publicPath: "dist/public",
			inject: false
		}),

		// Pug pages
		new HtmlWebpackPlugin({
			filename: "./resources/views/index.pug",
			template: "./resources/pug/index.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/projects.pug",
			template: "./resources/pug/projects.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/project-view.pug",
			template: "./resources/pug/project-view.pug",
			publicPath: "",
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/views/contact-me.pug",
			template: "./resources/pug/contact-me.pug",
			publicPath: "",
		}),

		// Additional plugins
		new HtmlWebpackPugPlugin(),
		new HtmlWebpackSkipAssetsPlugin(),
		new WebpackShellPluginNext({
			onAfterDone: {
				scripts: ["node move-files.js"]
			}
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "resources/json",
					to: "public"
				},
				{
					from: "resources/markdown",
					to: "resources/markdown"
				}
			]
		})
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
						name: "public/[name].[ext]"
					}
				}
			},
			{
				test: /\.png$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "public/img"
					}
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: "style",
					type: "css/mini-extract",
					chunks: "all",
					enforce: true
				},
			},
		},
	},
}