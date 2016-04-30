/**
 * @file
 * The main application view.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([
    'jquery', 
    'backbone', 
    'app/collection/days',
    'app/view/list',
    'app/view/stats'
], function( $, Backbone, DayCollection, ListView, StatsView ) {
    'use strict';

    var AppView = Backbone.View.extend({
        className: 'app',
        tpl: _.template( $( '#app-tpl' ).html() ),
        events: {
            'click #success-button': 'triggerDayAddGood',
            'click #failure-button': 'triggerDayAddBad'
        },
        initialize: function() {
            if ( !this.collection ) {
                this.collection = new DayCollection();
                this.collection.fetch();
            }
        },
        render: function() {
            this.$el.empty();
            this.$el.html( this.tpl() );
            var that = this;

            var listView = new ListView({ collection: this.collection });
            listView.render();
            this.$el.find( '#list' ).html( listView.$el );
            listView.on( 'day:edit', function( day ) {
                that.trigger( 'day:edit', day );
            });

            var statsView = new StatsView({ collection: this.collection });
            statsView.render();
            this.$el.find( '#stats' ).html( statsView.$el );

            return this;
        },
        triggerDayAddGood: function( ) {
            this.trigger( 'day:add', 'good' );
        },
        triggerDayAddBad: function( ) {

            this.trigger( 'day:add', 'bad' );
        }
    });

    return AppView;
});
