const webpack = require('webpack');

module.exports = {
  output: {
    libraryTarget: 'amd'
  },
  externals: {
    webcomponent: 'webcomponent',
    bootstrap: 'bootstrap',
    mdl: 'mdl',
    'mdl-script': 'mdl-script'
  }
};
