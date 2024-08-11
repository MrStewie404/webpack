const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = (env) => {
  if (env.production) {
    return merge(prodConfig, {
      mode: 'production',
    });
  }
  return merge(devConfig, {
    mode: 'development',
  });
};