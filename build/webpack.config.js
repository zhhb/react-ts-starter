const path            = require('path');
const merge           = require('webpack-merge');
const webpackBaseConf = require('./webpack.config.base');

const TARGET = process.env.npm_lifecycle_event;

// use dev
if ( TARGET === 'start' ) {
  module.exports = merge(webpackBaseConf, {
    mode: 'development',
  });
  console.log('[development]', module.exports, webpackBaseConf);
}

// use prod
if ( TARGET === 'build' ) {
  module.exports = merge(webpackBaseConf, {
    mode: 'production',
  });
  console.log('[production]');
}

// module.exports = (env, options) => {
//   return {}
// };