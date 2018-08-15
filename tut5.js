function req(){ throw new Error('missing argument'); }

function foo(param1 = req(), param2 = req(), param3 = undefined){
	return ('no missing argument');
}

console.log(foo('1', '2', '3'));
console.log(foo('1', '2'));
console.log(foo('1'));