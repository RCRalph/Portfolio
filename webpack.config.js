const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { HtmlWebpackSkipAssetsPlugin } = require("html-webpack-skip-assets-plugin");

module.exports = {
	entry: {
		vendor: "./resources/js/vendor.js",
		main: "./resources/js/main.js",
		projects: "./resources/js/projects.js",
		"font-awesome": "./resources/js/font-awesome.js"
	},
	output: {
		path: __dirname + "/dist"
	},
	plugins: [
		// Pug layouts
		new HtmlWebpackPlugin({
			filename: "./resources/pug/page-template.pug",
			template: "./resources/pug/page-template.pug",
			publicPath: "/",
			skipAssets: ["/projects.**.js", "/projects.js"]
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/page-template-vue.pug",
			template: "./resources/pug/page-template.pug",
			publicPath: "/"
		}),

		// Pug components
		new HtmlWebpackPlugin({
			filename: "./resources/pug/head.pug",
			template: "./resources/pug/head.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/footer.pug",
			template: "./resources/pug/footer.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/navbar.pug",
			template: "./resources/pug/navbar.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/menu-drop.pug",
			template: "./resources/pug/menu-drop.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/social-media.pug",
			template: "./resources/pug/social-media.pug",
			publicPath: "dist/public",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/modals.pug",
			template: "./resources/pug/modals.pug",
			inject: false
		}),

		// Pug pages
		new HtmlWebpackPlugin({
			filename: "./resources/pug/index.pug",
			template: "./resources/pug/index.pug",
			publicPath: "",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/projects.pug",
			template: "./resources/pug/projects.pug",
			publicPath: "",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/project-view.pug",
			template: "./resources/pug/project-view.pug",
			publicPath: "",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./resources/pug/contact-me.pug",
			template: "./resources/pug/contact-me.pug",
			publicPath: "",
			inject: false
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
					from: "resources/html-svg",
					to: "resources/html-svg"
				},
				{
					from: "resources/img",
					to: "public/img",
					globOptions: {
						ignore: [
							"**/favicon.ico"
						]
					}
				}, 
				{
					from: "resources/content",
					to: "public/content"
				}
			]
		}),
		new HtmlWebpackSkipAssetsPlugin()
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
					"vue-style-loader",
					{
						loader: 'css-loader',
						options: {
						  	esModule: false
						}
					}
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
		   	vue: 'vue/dist/vue.js'
		}
	}
}