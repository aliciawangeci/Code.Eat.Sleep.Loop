
const leapYears = function(year) {
	if ( year % 4 == 0) {
		if (year % 100 == 0 && year % 400 !== 0) {
			return false
		} else {
			return true;
		}
	} else {
		return false;
	}
}

leapYears(1996)

module.exports = leapYears
