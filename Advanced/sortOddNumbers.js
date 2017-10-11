/**
 * Sort only Odd numbers in a given array
 */

function sortOddNumber(arr){
	const odd = arr.filter((x) => x%2).sort((a,b)=>a-b);
	return arr.map((x) => x%2 ? odd.shift() : x);
}

function sortArray(array) {
	  var odd= [];
	  for(var i=0; i<array.length; i++){
	    if(array[i] %2 !=0){
	      odd.push(array[i])
	    }
	  }
	  odd.sort(function(a,b){return a-b;});
	  
	   for(var i=0, j=0; i<array.length, j<odd.length; i++){
	    if(array[i] %2 !=0){
	      array[i] = odd[j];
	      j++;
	    }
	  }
	  return array;
}

console.log(sortOddNumber([3,1,2,8,9,6]));
console.log(sortArray([9,12,8,2,1,5]));

