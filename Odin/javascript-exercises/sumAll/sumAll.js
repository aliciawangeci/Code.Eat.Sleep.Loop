const sumAll = function(n1, n2) {
	let sum = 0;
	if( n1 < -1 || n2 < -1 || typeof(n1) !== 'number' || typeof(n2) !== 'number' ){
		return 'ERROR';
	} else if (n1 < n2 ) {
		for( i = n1; i <= n2; i++){
			sum = sum + i;
		}
	} else if (n1 > n2) {
		for( i = n2; i <= n1; i++){
			sum = sum + i;
		}
	}
	return sum;
}

module.exports = sumAll
