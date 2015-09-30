/**
 * @file
 * Router file.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define( 'app/router/router', [
    'backbone'
], function( Backbone ) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'days': 'days',
            'day/:id': 'day',
        }
    });

    return Router;
});
