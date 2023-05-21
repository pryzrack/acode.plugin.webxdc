const path = require('path');

module.exports = (env, options) => {
  const { mode = 'development' } = options;
  const rules = [
    {
      test: /\.(toml|html)$/i,
      use: [
        {
          loader: 'raw-loader',
        },
      ],
    },
    {
      test: /\.(png|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: true,
          },
        },
      ],
    },
  ];
  
  const main = {
    mode,
    entry: {
      main: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules,
    },
  };

  return [main];
};