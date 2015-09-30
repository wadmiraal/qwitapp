/**
 * @file
 * Day collection.
 *
 * Loading of one or more days.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'backbone', 'app/model/day' ], function( Backbone, DayModel ) {
    'use strict';

    var DayCollection = Backbone.Collection.extend({
        model: DayModel,
        url: '/days'
    });

    return DayCollection;
});
