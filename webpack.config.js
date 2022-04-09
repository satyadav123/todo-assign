const path=require("path")

module.exports = {
entry:"./src/index.js",
output: {
  path:path.resolve(".","build"),
  filename:"bundle.js"

},
module: {
  

  
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
mode:"development",
};
