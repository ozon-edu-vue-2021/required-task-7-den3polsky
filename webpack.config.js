const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
 "mode": "none",
 "entry": "./src/main.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "[name][contenthash].js"
 },

 plugins: [    
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './src/i/favicon.ico'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
 ],

module: {
    rules: [
        { 
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
      ]
},

devServer: {
   port: 5555
 }
}