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
				test: /\.css$/,
				use: [
					{loader: 'css-loader'},
					{loader: 'style-loader'}
				]
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['react']
					}
				}
			}

		]
	}
}


module.exports = config