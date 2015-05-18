var path = require('path');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "nodemon": {
            "dev": {
                "script": "jxcore/index.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');

    // Run the server
    grunt.registerTask('server', ['nodemon']);

    // Default task(s).
    grunt.registerTask('default', ['server']);

};

