/**
 * Implement bubble sort
 */
function bubblesort(a){
	for(let i=0; i< a.length; i++){
		for(let j=0; j<a.length ;j++){
			if(a.length == 1)
				return a;
			if(a[j] > a[j+1]){
				let temp =0;
				temp = a[j]; 
				a[j] = a[j+1];
				a[j+1] = temp;
			}
		}
	}
	return a;
}

console.log(bubblesort([5, 1, 7, 3, 2]));
console.log(bubblesort([15, 01, 7, 13, 2]));
console.log(bubblesort([20]));
console.log(bubblesort([5, 9, 0, 1, 2]));



