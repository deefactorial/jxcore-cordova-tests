
if(typeof window === "undefined") {
  var assert = require('assert');
  var request = require('superagent');
}

function serialize(obj, res) {
  var val = request.serializeObject(obj);
  assert(val == res
    , JSON.stringify(obj) + ' to "' + res + '" serialization failed. got: '
    + '"' + val + '"');
}

function parse(str, obj) {
  var val = request.parseString(str);
  assert.deepEqual(val
    , obj
    , '"' + str + '" to '
    + JSON.stringify(obj) + ' parse failed. got: '
    + JSON.stringify(val));
}


if (typeof describe !== 'undefined') {



}