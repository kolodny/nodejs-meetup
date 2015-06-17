var assert = require('assert');
var nodejsMeetup = require('../');

describe('node-sample-plugin', function() {
  it('does awesome stuff', function() {
    assert.equal( nodejsMeetup('yay!'), 'YAY!' );
  });
});
