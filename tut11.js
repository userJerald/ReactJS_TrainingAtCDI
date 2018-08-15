// Length of each word must be greater than 6

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(word => word.length > 6);

console.log();

console.log(result);

console.log('-----------------------');
console.log();

// Each number must be greater than 10

// function isBigEnough(num){
// 	return num > 10;
// }

var numbers = [12, 5, 8, 130, 44].filter(function(num){
	return num > 10;
});

console.log(numbers);

console.log('-----------------------');
console.log();

// Each id must be a number and not equal to 0

var arr = [
	{id : 15},
	{id: -1},
	{id: 0},
	{id: 3},
	{id: 12.2},
	{},
	{id: null},
	{id: NaN},
	{id: 'undefined'}];

var invalidEntries = 0;

function isNumber(obj){
	return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item){
	if (isNumber(item.id) && item.id !== 0){
		return true;
	}

	invalidEntries++;
	return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);

console.log('-----------------------');
console.log();

// Each word to print must have the string stated

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query){
	return fruits.filter(function(el){
		return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
	});
}

console.log("Searched result for 'ap'", filterItems('ap'));
console.log();
console.log("Searched result for 'an'", filterItems('an'));