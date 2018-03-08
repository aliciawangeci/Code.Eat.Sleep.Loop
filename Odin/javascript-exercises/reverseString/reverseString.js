var reverseString = function(s) {
	return s
		.split("")
		.reverse()
		.join("");
};

function reverseString2(str) {
	// return str === "" ? "" : reverseString2(str.substr(1)) + str.charAt(0);
	if (string === "") {
		return "";
	} else {
		return reverseString2(str.substr(1)) + str.charAt(0);
		// this reverseString2() reduces the given string hello.subsrt(1) returns "ello"
		// and hello.charAt(0) is h
	}
}

module.exports = reverseString2;
