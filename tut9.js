function report([name, color]){
	console.log(name + "'s favorite color is", color + ".");
}

let data = ['Jerald', 'green'];
report(data);

let arr = [1, [2, 3], [[4, 5], [6, 7, 8]]];
let [a, [, b], [[c], [,, d]]] = arr;

console.log('a =', a);
console.log('b = ', b);
console.log('c =', c);
console.log('d = ', d);

let obj = {color: 'blue', weight: 1, size: 32};
let {color, size} = obj
console.log('color =', color);
console.log('size', size);

function report2(p1, {weight, color}){
	console.log(p1, color, weight);
}

report2(19, obj);