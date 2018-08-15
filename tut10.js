var arr1 = [1, 4, 9, 16];

var map1 = arr1.map(x => x * 2);
console.log(map1);

map1 = arr1.map(Math.sqrt);
console.log(map1);

console.log('----------------------');

var kvArray = [{key: 1, value: 10},
				{key: 2, value: 20},
				{key: 3, value: 30}
				];

var reformattedArray = kvArray.map(obj => {
	var rObj = {};
	rObj[obj.key] = obj.value;
	return rObj;
});

console.log(kvArray);
console.log();
console.log(reformattedArray);

console.log('----------------------');

var numbers = [1, 2, 3, 4];

var doubles = numbers.map(function(num){
	return num * 2;
});

console.log(numbers);
console.log();
console.log(doubles);

console.log('----------------------');

var arr = Array.prototype.map;
var arrNew = arr.call("Hello World", function(x){
	return x.charCodeAt(0);
});

console.log();
console.log(arrNew);