cordova('asyncSeverStarted').registerAsync(function(message, callback){

    console.log("asyncSeverStarted called:" + message);

    if (message == "Hello") {

        var app = require("./index.js");

        callback("Pong:" + message);

    } else if (message == "Hello supertest") {

        var app = require("./supertest.js");

        callback("Pong:" + message);

    } else if (message == "Hello cookie-parser") {

        var app = require("./cookie-parser.js");

        callback("Pong:" + message);

    } else {
        callback("unknown message:" + message);
    }

});

