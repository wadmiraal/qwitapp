/**
 * @file
 * The day list view.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define( 'app/view/days', [
        'jquery',
        'backbone',
        'app/collection/days',
        'app/view/day'
    ], function( $, Backbone, DayCollection, DayView ) {
    'use strict';

    var DaysView = Backbone.View.extend({
        id: 'list',
        tpl: _.template( $( '#list-tpl' ).html() ),
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

        }
    });

    return DaysView;
});
