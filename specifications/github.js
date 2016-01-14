'use strict';

var
  request = require('request');

function accessUserPage (username, callback) {
  var options = {
    uri: 'https://github.com/' + username,
    method: 'HEAD',
    headers: {
      'User-Agent': 'codecheck challenge',
    }
  };
  request(options, callback);
};

module.exports = {
  accessUserPage: accessUserPage,
}
