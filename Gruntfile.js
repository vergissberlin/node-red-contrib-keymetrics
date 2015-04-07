module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'lib/**/*.js',
                'test/**/*.js'
            ]
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: [ 'jshint']
        }
    });

    require('load-grunt-tasks')(grunt);

    // build
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['build']);

};
