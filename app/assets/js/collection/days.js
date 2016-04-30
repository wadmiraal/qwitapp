/**
 * @file
 * Day collection.
 *
 * Collection of one or more DayModels.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'backbone', 'localstorage', 'app/model/day' ], function( Backbone, a, DayModel ) {
    'use strict';

    var DayCollection = Backbone.Collection.extend({
        model: DayModel,
        localStorage: new Backbone.LocalStorage( 'qwit-days' ),
        totalGood: function() {
            return this.where({ type: 'good' }).length;
        },
        totalBad: function() {
            return this.where({ type: 'bad' }).length;
        },
        longestStreak: function() {
            var count = 0,
                max = 0;

            this.each( function( day ) {
                if ( day.get( 'type' ) === 'good' ) {
                    count++;
                } else {
                    max = Math.max( max, count );
                    count = 0;
                }
            });

            return Math.max( max, count );
        }
    });

    return DayCollection;
});
