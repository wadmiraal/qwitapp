/**
 * @file
 * Application initializer.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

 // RequireJS configuration.
require.config({
    baseUrl: 'assets/',
    urlArgs: 'v=1.0.0' + Math.random(),
    paths: {
        jquery: 'components/jquery/jquery',
        underscore: 'components/underscore/underscore',
        backbone: 'components/backbone/backbone',
        app: 'js/',
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        }
    }
});

// Require the application, and start it.
require([ 'app/app' ], function( App ) {
    'use strict';

    App.initialize();
});
