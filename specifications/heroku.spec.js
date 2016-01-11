'use strict';

var
  heroku = require('./heroku'),
  assert = require('chai').assert,
  account = require('./account.json');

describe('Verify Heroku Application', function() {
  it('should get right user', function (done) {
    heroku.isRunning(account.heroku_appname, function (err, resp, body) {
      assert.equal(resp.statusCode, 200);
      done();
    });
  });
});
