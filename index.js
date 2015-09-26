// assert reference: http://chaijs.com/api/assert/
var assert = require( 'chai' ).assert;

describe( 'Numbers', function() {
	describe( 'Sample', function() {
		it( '2 should be larger than 1', function() {
			assert( 2 > 1 );
		} );

		it( '1 should equal 1', function() {
			assert.equal( 1, 1 );
		} );

		it( 'those two arrays should be equal', function() {
			assert.deepEqual( [1, 2, 3], [1, 2, 3] );
		} );
	} );
} );
