var fruit = 'banana', number = 19;
var obj = {fruit, foo: 'bar', number};
console.log(obj);

console.log('\n\n');

class Shoe {
	constructor(brand, model, size){
		this.brand = brand;
		this.model = model;
		this.size = size;
		Shoe.counts += 1;
	}

	static createdAny(){
		return Shoe.counts > 0;
	}

	set _size(size){
		this.size = size;
	}

	equals(obj){
		return obj instanceof Shoe &&
			this.brand === obj.brand &&
			this.model === obj.model &&
			this.size === obj.size;
	}

	toString(){
		return this.brand + ' ' + this.model + " '" + this.size;
	}
}

Shoe.counts = 0;

var s1 = new Shoe('Adidas', 'Precision 5', 13);
var s2 = new Shoe('Nike', 'Free 6', 12);
var s3 = new Shoe('Underarmour', 'Precision 10', 11);

console.log('created any?', Shoe.createdAny());
console.log('count =', Shoe.counts);
s2.size = 30;
console.log('s2 = ' + s2);
console.log('s1.equals(s2) =', s1.equals(s2));
console.log('s2.equals(s3) =', s2.equals(s3));

class RunningShoe extends Shoe {
	constructor(brand, model, size, type){
		super(brand, model, size);
		this.type = type;
		this.miles = 0;
	}

	addMiles(miles){
		this.miles += miles;
	}

	shouldReplace(){
		return this.miles >= 500;
	}
}

var rs = new RunningShoe('Nike', 'Free Everyday', 13, 'lightweight trainer');
rs.addMiles(400);
console.log('should replace?', rs.shouldReplace());
rs.addMiles(200);
console.log('should replace?', rs.shouldReplace());
console.log(rs);

console.log('\n\n');

class Person {
	constructor (first, middle, last, age){
		this._first = first;
		this._middle = middle;
		this._last = last;
		this._age = age;
	}

	get age(){
		return this._age;
	}

	set age(age){
		this._age = age;
	}
}

var p1 = new Person('Jerald', 'Mahinay', 'de Florencia', 19);
console.log(p1);

p1.age = 20;
console.log(p1.age);