const palindromes = string => {
	string = string.toLowerCase().replace(/[" ".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	for (let i = string.length - 1; i >= 0; i--) {
		for (let j = 0; j < string.length; j++) {
			if (string[i] == string[j]) {
				return true;
			} else {
				return false;
			}
		}
	}
};

const palindromes2 = str => {
	let re = /[\W_]/g;
	// simillar to let re = /[^A-Za-z0-9]/g
	// anything that is not A-Z, a-z or 0-9
	let lowRegStr = str.toLowerCase().replace(re, "");
	// to lowercase and replace all spl characters
	let reverseStr = lowRegStr
		.split("")
		.reverse()
		.join("");
	// chaining methods with built-in functions to reverse a string.
	return reverseStr === lowRegStr;
	// return true or false
};

module.exports = palindromes2;
