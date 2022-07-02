const path = require('path');

module.exports = {
  // start from
  entry : './src/index.js',
  // where to
  output : {filename : 'bundle.js', path : path.resolve(__dirname, './dist')},
  // mode: Development or Production
  mode : 'none'
}