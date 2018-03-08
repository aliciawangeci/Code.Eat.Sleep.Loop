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

module.exports = palindromes;
