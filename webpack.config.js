const path = require('path');

const moduleOption = {
  rules: [
    { test: /\.ts$/, loader: 'ts-loader' }
  ]
};
const resolves = {
  extensions: ['.ts', '.js']
};

const mainSrc = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: moduleOption,
  resolve: resolves,
  target: 'electron-main'
};

const browserSrc = {
  entry: './src/browser.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'browser.js'
  },
  module: moduleOption,
  resolve: resolves,
  target: 'electron-renderer'
};

module.exports = [mainSrc, browserSrc];
