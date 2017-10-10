/**Print 'Ping' , 'Pong' continously 
 */
init();
pong();

function printPing() {
   console.log("Ping");
}
function printPong() {
	console.log("Pong");
}

function init() {
    var myFunction = function() {
        printPing();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
    }
    myFunction();
}
function pong() {
    var myFunction = function() {
        printPong();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
    }
    myFunction();
}
