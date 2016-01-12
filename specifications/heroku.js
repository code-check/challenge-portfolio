'use strict';

var
  request = require('request');

function isRunning (name, path, callback) {
  function endpoint (appname, path) {
    return 'https://' + appname + '.herokuapp.com' + (path || '/');
  }
  var options = {
    uri: endpoint(name, path),
    method: 'GET',
    json: true
  };
  request(options, callback);
}

module.exports = {
  isRunning: isRunning,
}
