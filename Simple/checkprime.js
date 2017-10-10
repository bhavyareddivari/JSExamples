/**
 * If the given number is prime, print "13 is prime", else print array of divisors [2,3]
 */

function checkPrime(num){
	var res=[];
	var count=0;
	for(let i=2; i<num ;i++){
		if(num%i === 0){
			res.push(i);
			count++;
		}
	}
	return (count == 0) ?  num + " is prime" : res;
}

console.log(checkPrime(13));
console.log(checkPrime(25));
console.log(checkPrime(29));
console.log(checkPrime(122));