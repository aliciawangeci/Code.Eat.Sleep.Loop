const calculator = require("./simArraySum");

describe('sum', function() {
	it('computes the sum of an empty array', function() {
		expect(calculator.sum(0, [])).toEqual(0);
	});

	it('computes the sum of an array of one number', function() {
		expect(calculator.sum(1, [7])).toEqual(7);
	});

	it('computes the sum of an array of two numbers', function() {
		expect(calculator.sum(2, [7,11])).toEqual(18);
	});

	it('computes the sum of an array of many numbers', function() {
		expect(calculator.sum(5, [1,3,5,7,9])).toEqual(25);
	});
});