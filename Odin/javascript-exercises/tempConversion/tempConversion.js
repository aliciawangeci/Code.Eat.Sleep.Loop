
const ftoc = function(fahrenheit) {
	const Round = (num, pre) => {
		let factor = Math.pow(10, pre);
		return Math.round(num * factor) / factor;
	}
	let celsius = (fahrenheit - 32 ) * 5/9
	return Round(celsius, 1);
}

const ctof = function(celsius) {
	const Round = (num, pre) => {
		let factor = Math.pow(10, pre);
		return Math.round(num * factor) / factor;
	}
	let fahrenheit = celsius * 9/5 + 32;
	return Round(fahrenheit, 1);
  // T(°F) = T(°C) × 9/5 + 32
}

module.exports = {
  ftoc,
  ctof
}