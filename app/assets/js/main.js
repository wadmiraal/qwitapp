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
        jquery: 'components/jquery/dist/jquery',
        underscore: 'components/underscore/underscore',
        backbone: 'components/backbone/backbone',
        localstorage: 'components/backbone.localStorage/backbone.localStorage',
        app: 'js/',
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        localstorage: {
            deps: [ 'backbone' ]
        }
    }
});

// Require the application, and start it.
require([ 'app/app' ], function( App ) {
    'use strict';

    App.initialize();
});
