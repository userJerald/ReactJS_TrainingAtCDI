// Day 1:

// return ui

// filter or buff

// map an object or filter an object

// assignment

var songlist = [
	{artist: 'Jerald', song: 'Di ko alam', id: '0001'},
	{artist: 'Dianne Rose', song: 'Ewan din', id: '0002'},
	{artist: 'Mama', song: 'kahit ano', id: '0003'}];


songlist.map(i => {
	console.log("\nSong:", i.song, "\nID:", i.id, "\nSung by:", i.artist, "\n--------------------\n");
});

console.log('\n\nOR');

songlist.forEach(({artist, song, id}) => console.log("\nSong:", song, "\nID:", id, "\nSung by:", artist, "\n--------------------\n"));

console.log('\n\n');

var table = [
			{name: 'Jerald', age: 20},
			{name: 'Dianne Rose', age: 13},
			{name: 'Rosalia', age: 41}];

var arr = [];

table.map(i => arr.push({name: i.name, age: i.age}));

console.log("Table:\n", arr);

console.log();

console.log("Filtered by Age (Age 20 and up):\n",
	arr.filter(function(i){
		return i.age >= 20;
	})
);

console.log('\n\n');

var arrT = [1, 2, 3, 4];

var arrTNew = arrT.reduce( (acc, cur) => {
	acc.push(cur);
	return acc;
}, []);

console.log(arrTNew);

console.log('\n\n');

var array2 = [];

[1, 2, 3, 4].map((el, ind) => {
	array2.push(el);
});

console.log(array2);

console.log('\n\n');

console.log('string.match(any word) returns =', ("Hello World").match('Hello'));

console.log('\n\n');

console.log([1, 2].join(' + '));

console.log('\n\n');

var somename = 'Jerald';
console.log(`Hello ${somename} , 
How are you doing?`);

console.log('\n\n');

var ctr = 0;

var upValues = (strings, ...values) => {
	var result = strings[0];

	console.log(result);
	console.log(strings);
	console.log(values);

	values.forEach((value, index) => {
		result += value.toUpperCase() + strings[index + 1];
		console.log(value.toUpperCase(), ' + ', strings[index + 1]);
	});
	return result;
}

var firstName = 'Mark';
var lastName = 'Volkmann';
console.log(upValues `Hello World ${firstName} ${lastName} a`);

console.log('\n\n');

var map = new Map ([['Mama', 41], ['Jerald', 20], ['Dianne Rose', 13], ['Mai-mai', 0]]);
map.forEach((value, key) => {
	console.log(`${key} = ${value}`);
});

for (var value of map.values()){
	console.log(value);
}

var mapNew = new Map([...map]);

console.log(mapNew);

var sample = [['Jerald', 'hayuk', 100], ['Dianne Rose', 'bibi', 100], ['Rosalia', 'mama', 100], ['Mai-mai', 'crooque... crook...', 20]];

var sampleNew = sample.map(([name, alias, hp]) => [name, alias, hp]);
console.log(sampleNew);

for ([name, alias, hp] of sampleNew){
	console.log(name, alias, hp);
}

sampleNew.forEach(([name, alias, hp]) => { console.log('from foreach', name, alias, hp); });

console.log('\n\n');

var util = {
	getRandom : () => {
		return Math.random();
	},

	getSum : (a, b) =>{
		return a + b;
	}
};

console.log(`random = ${util.getRandom()}, sum = ${util.getSum(1, 2)}`, '\n\n');

var arrSample = [{name: 'Jerald', alias: 'hAYUK'}, {name: 'Rosalia', alias: 'superMOM-a'}, {name: 'Dianne Rose', alias: 'Vivi'}, {name: 'Mai-mai', alias: 'crook'}];

for ({name, alias} of arrSample) {
	console.log(`${name} = ${alias}`);
}

console.log('\n\n');

console.log(
	['tae', 'applea', 'asala'].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
);