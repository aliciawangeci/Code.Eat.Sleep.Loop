
function simpleArraySum(n, ar) {
	let sumAll = 0;
  	for(i = 0; i < n; i++){
  		sumAll = sumAll + ar[i];
  	}
  	console.log(sumAll)
}

simpleArraySum(6, [1, 2, 3, 4, 10, 11]) // 31