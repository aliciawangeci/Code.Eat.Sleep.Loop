const bubble = require("./bubble");

describe("Sorting an array", function() {
	it("Returns a sortted array", function() {
		expect(bubble([8, 6, 4, 7, 2, 3])).toEqual([2, 3, 4, 6, 7, 8]);
	});
	it("Works with the same numbers", function() {
		expect(bubble([9, 1, 1, 8, 3, 1, 4]).toEqual([1, 1, 1, 3, 4, 8, 9]));
	});
});
