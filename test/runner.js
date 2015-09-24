/**
 * @file
 * Spec runner.
 *
 * The runs all the Jasmine specs. It includes the configuration for
 * RequireJS, as to make our app scripts compatible.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

require.config({
    baseUrl: '../app/assets/',
    urlArgs: 'random=' + Math.random(),
    paths: {
        jquery: 'components/jquery/jquery',
        underscore: 'components/underscore/underscore',
        backbone: 'components/backbone/backbone',
	jasmine: 'components/jasmine/lib/jasmine-core/jasmine',
	'jasmine-html': 'components/jasmine/lib/jasmine-core/jasmine-html',
	'jasmine-boot': 'components/jasmine/lib/jasmine-core/boot',
	testem: '/testem',
        app: 'js',
        spec: '../../test/specs/'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
	'jasmine-html': {
            deps: [ 'jasmine' ]
	},
	'jasmine-boot': {
            deps: [ 'jasmine', 'jasmine-html' ]
	},
	testem: {
            deps: [ 'jasmine-boot' ]
	}
    }
});

require([ 'testem' ], function() {
    'use strict';

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var specs = [
        'spec/model/day'
    ];

    require( specs, function() {
	window.onload();
    });
});

