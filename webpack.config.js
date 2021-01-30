const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HtmlWebpackSkipAssetsPlugin } = require("html-webpack-skip-assets-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
	entry: {
		main: "./resources/js/main.js",
		vendor: "./resources/js/vendor.js"
	},
	output: {
		path: __dirname + "/dist"
	},
	plugins: [
		// Pug components
		new HtmlWebpackPlugin({
			filename: "./views/head.pug",
			template: "./resources/pug/head.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./views/footer.pug",
			template: "./resources/pug/footer.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./views/navbar.pug",
			template: "./resources/pug/navbar.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./views/menu-drop.pug",
			template: "./resources/pug/menu-drop.pug",
			publicPath: "dist/public",
			inject: false
		}),

		// Pug pages
		new HtmlWebpackPlugin({
			filename: "./views/index.pug",
			template: "./resources/pug/index.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "./views/projects.pug",
			template: "./resources/pug/projects.pug",
			publicPath: ""
		}),
		new HtmlWebpackPlugin({
			filename: "./views/project-view.pug",
			template: "./resources/pug/project-view.pug",
			publicPath: "",
		}),
		new HtmlWebpackPlugin({
			filename: "./views/contact-me.pug",
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