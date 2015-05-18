cordova('asyncSeverStarted').registerAsync(function(message, callback){

    console.log("asyncSeverStarted called:" + message);

    if (message == "Hello") {

        var app = require("./supertest.js");

        exports.app = app;

        callback("Pong:" + message);
    } else {
        callback("unknown message:" + message);
    }

});

