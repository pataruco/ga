import inquirer from 'inquirer';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../config/webpack.config.dev';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

// Exclude readme files
const excludePath = (nodePath: string) => nodePath.includes('readme.md');

const start = async () => {
  // Get Source
  const prompt = await inquirer.prompt([
    {
      excludePath,
      itemType: 'file',
      message: 'Select a slide:',
      name: 'source',
      rootPath: '../node_modules/@shared/lessons/src',
      type: 'fuzzypath',
    },
  ]);

  const { source } = prompt;

  const plugins = webpackConfig.plugins?.concat(
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  );

  // Running webpack server
  const config: webpack.Configuration = {
    ...webpackConfig,
    plugins,
  };
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler, {
    headers: {
      'X-SLIDES_PATH': source,
    },
    open: true,
  });

  // port 0 enable to pick a random number
  server.listen(0, 'localhost', (error) => console.error(error));
};

if (module.children) {
  start().then();
}
