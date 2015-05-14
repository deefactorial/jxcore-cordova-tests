var path = require('path');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('runNode', function () {
        grunt.util.spawn({
            cmd: 'node',
            args: ['./node_modules/nodemon/nodemon.js', 'index.js'],
            opts: {
                stdio: 'inherit'
            }
        }, function () {
            grunt.fail.fatal(new Error("nodemon quit"));
        });
    });

    // Run the server and watch for file changes
    grunt.registerTask('server', ['runNode']);

    // Default task(s).
    grunt.registerTask('default', ['server']);

};

