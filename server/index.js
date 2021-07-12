require('ignore-styles')
require("babel-core/register");
require("babel-polyfill");
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')