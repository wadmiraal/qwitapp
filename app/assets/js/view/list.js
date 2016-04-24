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
        events: {
            'click .day': 'triggerEditDay'
        },
        initialize: function() {
            if ( !this.collection ) {
                this.collection = new DayCollection();
                this.collection.fetch();
            }

            var that = this;
            this.collection
                .on( 'add change remove', function() {
                    that.render();
                });
        },
        render: function() {
            this.$el.empty();
            var content = '',
                that = this;

            this.collection.each( function( day, i ) {
                // We put the latest ones first. When the "add" event is 
                // triggered, we don't have an ID yet, as the element is not yet
                // stored in localStorage (bug?). Rely on the position of the
                // element inside the collection instead. This works just as
                // well in most situations, and it gets re-rendered the whole
                // time anyway.
                content = that.tpl( _.extend( { i: i }, day.toJSON() ) ) + content;
            });

            this.$el.html( content );

            return this;
        },
        triggerEditDay: function( e ) {
            var day = this.collection.at( e.currentTarget.id.replace( 'day-', '' ) );
            this.trigger( 'day:edit', day );
        }
    });

    return ListView;
});
