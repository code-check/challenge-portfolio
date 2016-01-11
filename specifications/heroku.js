'use strict';

var
  request = require('request');

function isRunning (name, callback) {
  function origin (appname) {
    return 'https://' + appname + '.herokuapp.com';
  }
  var options = {
    uri: origin(name),
    method: 'GET',
    json: true
  };
  request(options, callback);
}

module.exports = {
  isRunning: isRunning,
}
