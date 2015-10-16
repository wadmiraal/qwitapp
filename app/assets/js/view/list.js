/**
 * @file
 * The day list view.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'jquery', 'backbone', 'app/collection/days' ], function( $, Backbone, DayCollection ) {
    'use strict';

    var ListView = Backbone.View.extend({
        tpl: _.template( $( '#day-tpl' ).html() ),
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
                .bind( 'update', function() {
                    that.render();
                })
                .bind( 'remove', function() {
                    that.render();
                });
        },
        render: function() {
            this.$el.empty();
            var content = '',
                that = this;

            this.collection.each( function( day ) {
                // We put the latest ones first.
                if ( day.get( 'id') ) {
                    content = that.tpl( day.toJSON() ) + content;
                }
            });

            this.$el.html( content );
        }
    });

    return ListView;
});
