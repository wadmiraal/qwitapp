/**
 * @file
 * Application entrypoint.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define( 'app/app', [ 
    'backbone',
    'app/router/router',
    'app/model/day',
    'app/collection/days',
    'app/view/list',
    'app/view/stats'
], function( Backbone, Router, DayModel, DayCollection, ListView, StatsView ) {
    'use strict';

    return {
        initialize: function() {
            var router = new Router(),
                listWrapper = $( '#list' ),
                statsWrapper = $( '#stats' ),
                days = new DayCollection();
            
            days.fetch();

            router.on( 'route:home', function() {
                var listView = new ListView({ collection: days });
                listView.render();
                listWrapper.html( listView.$el );

                var statsView = new StatsView({ collection: days });
                statsView.render();
                statsWrapper.html( statsView.$el );
            });

            router.on( 'route:day-add', function( good ) {
                days.create({ good: !! parseInt( good ), date: '1' });
                router.navigate( '', true );
            });

            router.on( 'route:day', function( id ) {
                // Try getting the day from the collection first.
                var day = days.get(id);

                // If it's not set, create it.
                if ( !day ) {
                    day = new DayModel({ id: id });
                    day.fetch();
                }

                // Initiate the view.
                var dayView = new DayView({ model: day });

                // Render it and append to the DOM.
                dayView.render();
                contentWrapper.html( dayView.$el );
            });

            Backbone.history.start();
        }
    };
});
