var webpack = require('webpack');
module.exports = {
	entry: './src/index.js',
	output: {
		//path: '/.',
		filename: 'dist/bundle.js',
		pathinfo: true
	},
	resolve: {
		extensions: ['*', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},
			{
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
			//only enable this if you want jquery in the global window
			// { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" }
		]
	},
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
		jQuery: "jquery"
    })
  ]
};
