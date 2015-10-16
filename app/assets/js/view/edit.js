/**
 * @file
 * The day edit view.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'jquery', 'backbone', 'app/model/day' ], function( $, Backbone, DayModel ) {
    'use strict';

    var EditView = Backbone.View.extend({
        tpl: _.template( $( '#edit-tpl' ).html() ),
        initialize: function( options ) {
            this.router = options.router;
        },
        events: {
            'click #update-good': 'updateDayGood',
            'click #update-bad': 'updateDayBad',
            'click #delete': 'deleteDay'
        },
        updateDayGood: function() {
            this.model.set({ type: 'good' });
            this.model.save();
            this.router.navigate( '', true );
        },
        updateDayBad: function() {
            this.model.set({ type: 'bad' });
            this.model.save();
            this.router.navigate( '', true );
        },
        deleteDay: function() {
            this.model.destroy();
            this.router.navigate( '', true );
        },
        render: function() {
            this.$el.empty();
            var content = this.tpl( this.model.toJSON() );
            this.$el.html( content );
        }
    });

    return EditView;
});
