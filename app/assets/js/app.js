/**
 * @file
 * Application entrypoint.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define( 'app/app', [ 
    'backbone',
    'app/model/day',
    'app/collection/days',
    'app/view/app',
    'app/view/edit'
], function( Backbone, DayModel, DayCollection, AppView, EditView ) {
    'use strict';

    return {
        initialize: function() {
            var modal = $( '#modal' ),
                modalWrapper = $( '#modal-content' ),
                days = new DayCollection();

            // Fetch data before we render the application. When fetching, an
            // "add" event is triggered for each loaded item, which slows the
            // initialization down.
            days.fetch();

            // Create the main application view. This view also contains the 2
            // subviews, namely StatsView and ListView.
            var appView = new AppView({ collection: days });
            
            $( '#app' ).html( appView.render().$el );

            appView.on( 'day:add', function( good ) {
                days.create({
                    type: good === 'good' ? 'good' : 'bad',
                    date: new Date().toLocaleDateString()
                });
            });

            appView.on( 'day:edit', function( day ) {
                var editView = new EditView({ model: day });
                editView.render();
                appView.$el.append( editView.$el );
            });

            Backbone.history.start();
        }
    };
});
