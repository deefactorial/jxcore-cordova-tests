console.log("hello app.js");

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

    } else if (message == "Hello basic") {

        var app = require("./test/basic.js");

        callback("Pong:" + message);

    } else {

        console.log("require('" + message + "')");

        var app = require(message);

        callback("Pong:" + message);
    }

});

