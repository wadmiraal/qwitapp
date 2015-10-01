/**
 * @file
 * Day model.
 *
 * Data and information about one day. A day has a date and a "good" attribute.
 * If the day was "good", the good attribute will equal true. Otherwise, it
 * equals false. If a day was good, the user did not succumb to his temptation.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'backbone' ], function( Backbone ) {
    'use strict';

    var DayModel = Backbone.Model.extend();

    return DayModel;
});
