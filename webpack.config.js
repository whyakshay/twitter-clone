module.exports = {
  entry: "./app/assets/javascripts/components/main.jsx",
  output: {
    path: __dirname + 'app/assets/javascripts/components',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
};
