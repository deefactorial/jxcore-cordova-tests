cordova('asyncSeverStarted').registerAsync(function(message, callback){

    if (message == "Hello") {

        var app = require("./supertest.js");

        exports.app = app;

        callback("Pong:" + message);
    }

});

