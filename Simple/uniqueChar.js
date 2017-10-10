/**
 * Find unique characters in string
 */

function uniqueChar(str) {
	var unique='';
	for(let i=0; i<str.length; i++){
		if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
			unique += str[i];
		}
	}
	return unique;
}

console.log(uniqueChar("bhavya"));
console.log(uniqueChar("malayalam"));
