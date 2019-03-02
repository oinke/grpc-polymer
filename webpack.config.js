const path = require('path');

module.exports = {
  entry: './proto/client.js',
  output: {
    filename: 'grpc.js',
    path: path.resolve(__dirname, ''),
    library: 'grpc',
    libraryTarget: 'var',
  },
  mode: 'production',
  target: 'web',
};