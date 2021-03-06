var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   mode: 'production',
   performance: {
      hints: false
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/, 
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader'
               }
            ]
         }
      ]
   }
}
module.exports = config;