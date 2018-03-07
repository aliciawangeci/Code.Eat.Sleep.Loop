
const removeFromArray = function(array, ...args) {
	array = Array.apply(null, array);
	for (let i = 0; i < args.length; i++) {
		let index = array.indexOf(args[i]);
		if (index > -1) {
 			array.splice(index, 1);
		}
	}
	return array;
}

removeFromArray([1,2,3], 1, 2, 3);

module.exports = removeFromArray
