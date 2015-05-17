var path = require('path');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "nodemon": {
            "dev": {
                "script": "index.js"
            }
        }
    });

    //grunt.registerTask('runNode', function () {
    //    grunt.util.spawn({
    //        cmd: 'node',
    //        args: ['./node_modules/nodemon/nodemon.js', 'index.js'],
    //        opts: {
    //            stdio: 'inherit'
    //        }
    //    }, function () {
    //        grunt.fail.fatal(new Error("nodemon quit"));
    //    });
    //});

    grunt.loadNpmTasks('grunt-nodemon');

    // Run the server
    grunt.registerTask('server', ['nodemon']);

    // Default task(s).
    grunt.registerTask('default', ['server']);

};

