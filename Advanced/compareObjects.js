var obj1 = {a : {m :9}, b : 2, c : 3};
var obj2 = {a :1, b : 2, c : 3};

//for(var key in obj1){
//	if(obj2.hasOwnProperty(key)){
//		if(obj1[key] !== obj2[key]){
//			return false;
//		}
//	}
//}
//this works.. but if you add extra element then also it returns true.. so iterate through both the objects.

console.log(compareObjects(obj1, obj2));

function compareObjects(obj1, obj2){
	for(var key in obj1){
		if(obj1.hasOwnProperty(key)){
			if(obj1[key] !== obj2[key]){
				return false;
			}
		}
	}
	
	for(var key in obj2) {
		if(obj2.hasOwnProperty(key)){
			if(obj2[key] !== obj2[key]){
				return false;
			}
		}
	}
	return true;
}
// this works for single layer objects .. not for nested

//for nested