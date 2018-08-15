// function outer(){
// 	console.log("Outer works");
// }

// {
// 	function inner(){
// 		console.log("Inner works!");
// 	}

// 	outer();
// 	inner();
// }

// outer();
// inner();

function funcCall(msg){
	return msg + '!';
}

console.log(funcCall("Hello World"));