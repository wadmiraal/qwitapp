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
    'app/view/stats',
    'app/view/edit'
], function( Backbone, Router, DayModel, DayCollection, ListView, StatsView, EditView ) {
    'use strict';

    return {
        initialize: function() {
            var router = new Router(),
                listWrapper = $( '#list' ),
                statsWrapper = $( '#stats' ),
                modalWrapper = $( '#modal' ),
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
                var day = days.get( id ),
                    editView = new EditView({ model: day, router: router });
                editView.render();
                modalWrapper.html( editView.$el );
            });

            Backbone.history.start();
        }
    };
});
