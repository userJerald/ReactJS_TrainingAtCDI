console.log('\nHow to use Reduce() function...');

var numbers = [1, 2, 3, 4];

console.log('Array', numbers, '\n');

var reducer = (acc, cur) => {
	console.log('acc: ' + acc, 'cur: ' + cur);
	return acc + cur;
}

console.log('numbers.reduce(reducer) * No InitialValue assigned to Accumulator *...\n', numbers.reduce(reducer), '\n');
console.log('numbers.reduce(reducer, 5) * 5 is assigned as InitialValue to Accumulator *...\n', numbers.reduce(reducer, 5));

console.log('\nHow to Flatten Array of Arrays using Reduce() function...');

var arr = [[1, 2], [3, 4], [5, 6]];

console.log('Array', arr, '\n');

var flattened = arr.reduce((acc, cur) => {
	return acc.concat(cur);
}, []);
console.log('Flattened Array', flattened);

var names = ['Jerald', 'Mai', 'DianneRose', 'Mama', 'Mai'];

console.log('\nNames', names);

var countedNames = names.reduce((allNames, name) => {
	if (name in allNames){
		allNames[name]++;
	}
	else {
		allNames[name] = 1;
	}

	return allNames;
}, {});

console.log('Counted Names', countedNames);

console.log('\n');