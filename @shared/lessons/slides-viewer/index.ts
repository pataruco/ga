import inquirer from 'inquirer';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './config/webpack.config.dev';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

// Exclude readme files
const excludePath = (nodePath: string) => nodePath.includes('readme.md');

const plugins = webpackConfig.plugins?.concat(
  new HtmlWebpackPlugin({
    template: './slides-viewer/template.html',
  }),
);

const config: webpack.Configuration = {
  ...webpackConfig,
  plugins,
};

const main = async () => {
  // Get Source
  const prompt = await inquirer.prompt([
    {
      excludePath,
      itemType: 'file',
      message: 'Select a slide:',
      name: 'source',
      rootPath: './src',
      type: 'fuzzypath',
    },
  ]);

  const { source } = prompt;

  // Running webpack server
  const compiler = webpack(config);

  const server = new webpackDevServer(compiler, {
    headers: {
      'X-SLIDES_PATH': source,
    },
    open: true,
    port: 0,
  });

  await server.start();
};

main()
  .then()
  .catch((error) => console.error(error));
