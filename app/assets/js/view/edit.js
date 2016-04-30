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
        className: 'app__edit',
        tpl: _.template( $( '#edit-tpl' ).html() ),
        events: {
            'click .app__edit__button--update-good': 'updateDayGood',
            'click .app__edit__button--update-bad': 'updateDayBad',
            'click .app__edit__button--delete': 'deleteDay',
            'click .app__edit__cancel': 'cancel'
        },
        updateDayGood: function() {
            this.model.set({ type: 'good' });
            this.model.save();
            this.remove();
        },
        updateDayBad: function() {
            this.model.set({ type: 'bad' });
            this.model.save();
            this.remove();
        },
        deleteDay: function() {
            this.model.destroy();
            this.remove();
        },
        cancel: function() {
            this.remove();
        },
        render: function() {
            this.$el.empty();
            var content = this.tpl( this.model.toJSON() );
            this.$el.html( content );
        }
    });

    return EditView;
});
