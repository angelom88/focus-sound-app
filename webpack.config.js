const path = require('path')

const config = {
	entry: './src/entrypoint.js',
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}			

		]
	}
}


module.exports = config