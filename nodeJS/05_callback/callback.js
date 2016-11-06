




function  say(something) {
	// body...
	console.log(something);
}

function person(callback,something){
	something=something+" , how are you ! ";
	callback(something);
}

person(say," lenjee ");

person(function(something){
	console.log(something);
},' homer ');









