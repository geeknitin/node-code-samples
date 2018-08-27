// normal function expression

function sayHi(){
	console.log(' Hi ');
}


// function invokation

sayHi();


// function expression
var sayBye = function(){
	console.log("Bye");
}

sayBye();



// Passing one function into another function
function callFunction(fun)
{
	fun();
}


callFunction(sayBye);

module.exports = {sayHi, sayBye};