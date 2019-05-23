const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('svelte-preprocess-sass').sass;

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/index.js']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.svelte']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
						preprocess: {
							style: sass({indentedSyntax: true}),
						}
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
			/*
			 * Json loader support for *.json files.
			 *
			 * See: https://github.com/webpack/json-loader
			 */
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			/*
      * Load Sass Styles
      * See: See: https://github.com/jtangelder/sass-loader
      */
			{
				test: /\.(scss|sass)$/,
				use: [
					prod ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
				// use: ['to-string-loader','raw-loader', 'sass-loader']
			},
			{
				test: /\.woff(2)?(\?v=.+)?$/,
				use: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=.+)?$/,
				use: 'file-loader'
			},
			/* File loader for supporting images, for example, in CSS files.
      */
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
};