module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		inlinelint: {
			html: ['src/**/*.html']
		},

		jshint: {
			options: {
				// http://www.jshint.com/docs/options/
				'asi': true,      // allow missing semicolons
				'curly': true,    // require braces
				'eqnull': true,   // ignore ==null
				'forin': true,    // require property filtering in 'for in' loops
				'immed': true,    // require immediate functions to be wrapped in ( )
				'nonbsp': true,   // warn on unexpected whitespace breaking chars
				'strict': true,   // commented out for now as it causes 100s of warnings, but want to get there eventually
				'loopfunc': true, // allow functions to be defined in loops
				'sub': true       // don't warn that foo['bar'] should be written as foo.bar
			},
			all: [
				'Gruntfile.js',
				'src/**/*.js'
			],
			test: [
				'tests/**/*.js'
			],
		},

		simplemocha: {
			options: {
				globals: ['expect'],
				timeout: 3000,
				ignoreLeaks: false,
				ui: 'bdd',
				reporter: 'spec'
			},
			all: {src: ['tests/spec/**/*_spec.js']}
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// build
	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('default', ['jshint:all','inlinelint:html', 'simplemocha:all']);
	grunt.registerTask('travis', ['jshint:all','inlinelint:html', 'simplemocha:all']);
	grunt.registerTask('test', ['simplemocha:all']);

};
