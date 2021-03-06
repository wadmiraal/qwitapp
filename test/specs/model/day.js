/**
 * @file
 * Day model specs.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'app/model/day' ], function( DayModel ) {
    'use strict';

    describe( 'Day model', function() {

        describe( 'when loaded by RequireJS', function() {
            it( 'should exist', function() {
                expect( DayModel ).toBeDefined();
            });
        });

        describe( 'when instantiated', function() {
            it( 'should exhibit attributes', function() {
                var day = new DayModel({
                    type: 'good',
                    date: '2015-09-20'
                });
                expect( day.get( 'type' ) ).toEqual( 'good' );
                expect( day.get( 'date' ) ).toEqual( '2015-09-20' );
            });
        });
    });
});
