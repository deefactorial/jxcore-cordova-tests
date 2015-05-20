var assert = require('assert');
if (typeof global.window.define == 'function' && global.window.define.amd) {
    global.window.define('assert', function () { return assert; });
} else {
    global.window.assert = assert;
}