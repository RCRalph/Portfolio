const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
	entry: {
		vendor: "./resources/js/vendor.js",
		app: "./resources/js/app.js"
	},
	output: {
		path: __dirname + "/dist"
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "./resources/index.pug",
			template: "./resources/index.pug",
			publicPath: "/"
		}),

		// Additional plugins
		new HtmlWebpackPugPlugin(),
		new VueLoaderPlugin(),
		new WebpackShellPluginNext({
			onAfterDone: {
				scripts: ["node move-files.js"]
			}
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "resources/json",
					to: "public",
					globOptions: {
						ignore: [
							"**/projects.json",
						]
					}
				},
				{
					from: "resources/markdown",
					to: "resources/markdown"
				},
				{
					from: "resources/img",
					to: "public/img"
				}
			]
		}),
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
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
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
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: "file-loader",
					options: {
						outputPath: "public/fonts",
						publicPath: "fonts"
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
	resolve: {
		alias: {
		   	vue: "vue/dist/vue.js"
		}
	}
}
