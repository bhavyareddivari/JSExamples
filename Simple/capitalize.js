/**
 * Capitalize first letter in each word of a sentence
 */

String.prototype.capitalize = function(){
	var str = this.toString();
	var res='';
	var arr = str.split(' ');
	arr.forEach(function(word){
		word = word.charAt(0).toUpperCase() + word.substring(1);
		res += word + ' ';
	});
	return res.slice(0, res.length-1);
}

console.log("angular is a framework".capitalize());
console.log("React is a library".capitalize());
console.log("a friend in need is a friend in deed".capitalize());


