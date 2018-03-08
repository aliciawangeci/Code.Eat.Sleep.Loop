function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1 - n2;
}

function sum (array) {
	let sumAll = 0;
	for(i = 0; i < array.length; i++){
		sumAll = sumAll + array[i];
	}
	return sumAll;
}

function multiply (array) {
	let multiple = 1;
	for(i = 0; i < array.length; i++){
		multiple = multiple * array[i];
	}
	return multiple;
}

function power(n1, n2) {
	return Math.pow(n1, n2);
}

function factorial(n) {
    if ( n < 0 ) {
     return "Undefined";
    }
    let fact = 1;
    for ( i = n; i > 1; i--) {
      fact *= i;
    }
    return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}