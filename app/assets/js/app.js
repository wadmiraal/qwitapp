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
    'app/view/days',
    'app/view/day'
], function( Backbone, Router, DayModel, DayCollection, DaysView, DayView ) {
    'use strict';

    return {
        initialize: function() {
            var contentWrapper = $('#page-content > .page-content-wrapper');

            var router = new Router();
            
            var bookCollection = new DayCollection();
            bookCollection.fetch();

            router.on( 'route:home', function() {
                // Get the books view and pass it the collection.
                var booksView = new DaysView({ collection: bookCollection });

                // Render and append to the DOM.
                booksView.render();
                contentWrapper.html( booksView.$el );
            });

            router.on( 'route:book', function( id ) {
                // Try getting the book from the collection first.
                var book = bookCollection.get(id);

                // If it's not set, create it.
                if ( !book ) {
                    book = new DayModel({ id: id });
                    book.fetch();
                }

                // Initiate the view.
                var bookView = new DayView({ model: book });

                // Render it and append to the DOM.
                bookView.render();
                contentWrapper.html( bookView.$el );
            });

            Backbone.history.start();
        }
    };
});
