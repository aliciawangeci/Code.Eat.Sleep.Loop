
function sum(n, ar) {
	let sumAll = 0;
  	for(i = 0; i < n; i++){
  		sumAll = sumAll + ar[i];
  	}
  	return sumAll;
}

module.exports = { sum };