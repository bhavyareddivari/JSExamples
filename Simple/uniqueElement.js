/**
 * Find unique element in Array
 */

function findUnique(arr){
	var res=[];
	for(var i in arr){
		if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
			res.push(arr[i]);
	}
	return res;
}

//returns first unique element
function findUnique1(arr){
	let result = 0, n = arr.length;
	  for (var i = 0; i < n; i++) {
	    result ^= arr[i];
	  }
	  return result;
}
console.log(findUnique([1,2,2,3,1,4,5,5]));
console.log(findUnique([1,1,1,1,1]));
console.log(findUnique1([2,2,4,1,1]));

