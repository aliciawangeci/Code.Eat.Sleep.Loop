// function caesar(str, key) {
// 	let newStr = str
// 		.toUpperCase()
// 		.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65))
// 		.toLowerCase();

// 	return newStr.charAt(0).toUpperCase() + newStr.slice(1);
// }

// function cipher(str, key) {
//   let newStr = str
//     .toUpperCase()
//     .replace(/[A-Z]/g, c =>
//       String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65)
//     )
//     .toLowerCase();
//   return newStr.charAt(0).toUpperCase() + newStr.slice(1);
// }

// function caesar(str, key) {
//   wordArray = str.split(" ");
//   let ciphered = [];
//   if (wordArray.length > 1) {
//     for (i = 0; i < wordArray.length; i++) {
//       ciphered.push(cipher(wordArray[i], key));
//     }
//   } else {
//     return cipher(str, key);
//   }
//   console.log(ciphered.join().replace(",", " "));
// }

// caesar("Hello, World!", 5);

const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;
