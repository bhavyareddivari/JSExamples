/**
 * Check if the given number is perfect square or not
 */

function perfectSquare(num){
//	if(num >0 && Math.sqrt(num)% 1 === 0)
//		return true
//	else
//		return false;
	return (num >0 && Math.sqrt(num)% 1 === 0) ? true : false;
}

console.log(perfectSquare(25));
console.log(perfectSquare(131));
console.log(perfectSquare(0));
