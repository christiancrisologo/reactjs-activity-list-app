const path = require('path'); 
module.exports =  {
   entry: './src/index.js',
	
   output: {
      path: path.resolve('dist'),
      filename: 'bundle.js'
   },
	
   devServer: {
      inline: true,
      contentBase: path.resolve('dist'),
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         {
            test: /\.json?$/,
            exclude: /node_modules/,
            loader: "json-loader"
         },
         {
            test: /\.css?$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!autoprefixer-loader"
         },
         {
            test: /\.scss?$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
         }
      ]
   }
}
 