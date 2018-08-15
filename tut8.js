// part 1 - x

// let [var1, var2];

// let [,,var1,,var2] = some-iterable;

// let {prop1: var1, prop2: var2} = some-obj;

// let {prop1, prop2} = some-obj;

// ({prop1 : var1, prop2: var2}) = some-obj;

// part 2 - x

// let dateStr = 'I was born on 4/16/1963 in St. Louis';
// let re = /(\\d{1,2})\\/(\\d{1,2})/\\(\\d{4})/;
// let [, month, day, year] = re.exec(dateStr);
// console.log('date pieces =', month, day, year);

// part 3

function config({color, size, speed = 'slow', volume}){
	console.log('color =', color);
	console.log('size =', size);
	console.log('speed =', speed);
	console.log('volume =', volume);
}

config({
	size: 33,
	volume: 11,
	color: 'yellow'
});