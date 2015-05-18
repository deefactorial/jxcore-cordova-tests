var path = require('path');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'cookie-parser.js',
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '8181'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**'],
                    ext: 'js',
                    watch: ['server'],
                    delay: 1000,
                    legacyWatch: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');

    // Run the server
    grunt.registerTask('server', ['nodemon']);

    // Default task(s).
    grunt.registerTask('default', ['server']);

};

