cordova('asyncSeverStarted').registerAsync(function(message, callback){
    function poll(){
        setTimeout(function() {
            if(typeof exports.app != 'undefined') {
                callback("Pong:" + message);
            } else {
                poll();
            }
        }, 250);
    }
    poll();
});

var app = require("./index.js");

exports.app = app;