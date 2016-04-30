
/**
 * @file
 * Days collection specs.
 *
 * @author Wouter Admiraal <wad@wadmiraal.net>
 * @license MIT
 */

define([ 'app/collection/days' ], function( DayCollection ) {
    'use strict';

    describe( 'Day collection', function() {

        describe( 'when loaded by RequireJS', function() {
            it( 'should exist', function() {
                expect( DayCollection ).toBeDefined();
            });
        });

        describe( 'when requested to list all good days', function() {
            it( 'should return the correct number of days', function() {
                var days = new DayCollection(),
                    list = [ 1, 1, 1, 0, 1, 0 ];
                for ( var i = 0, len = list.length; i < len; ++i ) {
                    days.create({ type: !!list[ i ] ? 'good' : 'bad' });
                }
                expect( days.totalGood() ).toEqual( 4 );
            });
        });

        describe( 'when requested to list all bad days', function() {
            it( 'should return the correct number of days', function() {
                var days = new DayCollection(),
                    list = [ 1, 0, 1, 0, 0, 1, 1 ];
                for ( var i = 0, len = list.length; i < len; ++i ) {
                    days.create({ type: !!list[ i ] ? 'good' : 'bad' });
                }
                expect( days.totalBad() ).toEqual( 3 );
            });
        });

        describe( 'when requested to list the longest winning streak', function() {
            it( 'should return the correct number of days', function() {
                var days = new DayCollection(),
                    list = [ 1, 0, 1, 1, 1, 0, 0, 1, 1 ];
                for ( var i = 0, len = list.length; i < len; ++i ) {
                    days.create({ type: !!list[ i ] ? 'good' : 'bad' });
                }
                expect( days.longestStreak() ).toEqual( 3 );
            });
        });
    });
});
