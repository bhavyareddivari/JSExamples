//Find GCD of given numbers

function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE
    var res = arr[0];
    for(var i=1; i<num ;i++){
        res = gcd(arr[i], res);
    }
    return res;
}
// FUNCTION SIGNATURE ENDS

function gcd(a, b){
    if(a ===0)
        return b;
    return gcd(b%a, a);
}

console.log(generalizedGCD(5, [2,4,6,8,10]));
console.log(generalizedGCD(5, [2,3,4,5,6]));
