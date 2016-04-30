/**
 * @file
 * The day stats view.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'jquery', 'backbone', 'app/collection/days' ], function( $, Backbone, DayCollection ) {
    'use strict';

    var StatsView = Backbone.View.extend({
        tpl: _.template( $( '#stats-tpl' ).html() ),
        initialize: function() {
            if ( !this.collection ) {
                this.collection = new DayCollection();
                this.collection.fetch();
            }

            var that = this;
            this.collection
                .bind( 'add', function() {
                    that.render();
                })
                .bind( 'remove', function() {
                    that.render();
                });
        },
        render: function() {
            this.$el.empty();
            this.$el.html( this.tpl({
                good: this.collection.totalGood(),
                bad: this.collection.totalBad(),
                streak: this.collection.longestStreak()
            }) );
        }
    });

    return StatsView;
});
