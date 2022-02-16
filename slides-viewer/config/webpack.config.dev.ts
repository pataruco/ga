import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';

const sourceIndex = path.resolve(__dirname, '../src/lib/slides-presenter.ts');

const config: webpack.Configuration = {
  mode: 'development',
  entry: [sourceIndex],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.md'],
  },
  module: {
    rules: [
      {
        test: /\.css$|\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.md$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  externalsType: 'commonjs',
};

export default config;
