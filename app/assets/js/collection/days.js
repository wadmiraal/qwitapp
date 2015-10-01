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
            return this.where({ good: true }).length;
        },
        totalBad: function() {
            return this.where({ good: false }).length;
        },
        longestStreak: function() {
            var count = 0,
                max = 0;

            this.each( function( day ) {
                if ( day.get( 'good' ) ) {
                    count++;
                } else {
                    max = Math.max( max, count );
                    count = 0;
                }
            });

            return max;
        }
    });

    return DayCollection;
});
