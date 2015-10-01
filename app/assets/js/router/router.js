/**
 * @file
 * Router file.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'backbone' ], function( Backbone ) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'new-day/:good': 'day-add',
            'days': 'days',
            'day/:id': 'day',
        }
    });

    return Router;
});
