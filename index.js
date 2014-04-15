var assert = require('better-assert');

describe('Numbers', function() {
	describe('Integers', function() {
		it('1 should equal 1', function() {
			assert(1 === 1);
		});

		it('2 should be larger than 1', function() {
			assert(2 > 1);
		});
	});
});
