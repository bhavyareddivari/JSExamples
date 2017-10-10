/**
 * Given a string of space separated numbers, and have to return the highest and lowest number.
 */

function minMax(str){
  var arr = str.split(' ');
  var str='';
  var min = arr[0];
  var max = arr[0];
  for(var i=1; i<arr.length; i++){       
    max = (arr[i] > max) ? arr[i] : max;
    min = (arr[i] < min) ? arr[i] : min;
    }
  str+= "max= " +max + ' ' + "min= "+min;
  return str;
}

console.log(minMax("1 2 4 8 0"));
console.log(minMax("11 02 24 08 10"));