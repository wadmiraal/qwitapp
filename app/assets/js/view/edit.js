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
        render: function() {
            this.$el.empty();
            var content = this.tpl( this.model.toJSON() );

            this.$el.html( content );
        }
    });

    return EditView;
});
