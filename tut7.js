let arr1 = [1, 2];
let arr2 = [3, 4];

// OR *arr1.push.apply(arr1, arr2);*
// the above METHODS make ARRAY ELEMENT be part of another ARRAY ELEMENT,
// but if you decided to specify the expression as *arr1.push(arr2);*, without ELIPSIS(...),
// this will make the ARRAY name arr2, which is an ARRAY OBJECT, be the part of the ELEMENT of the ARRAY named arr1 instead of its ELEMENTS, which are NUMBERS only
// so instead of this to print *[1, 2, 3, 4]* once DISPLAY COMMAND is written on the COMMAND-LINE, this is *[1, 2, [3, 4]]* to print

arr1.push(...arr2); // prints *[1, 2, 3, 4]* - INDEX(i) - 4 ELEMENTS = i[0] is a NUMBER, i[1] is a NUMBER, i[2] is a NUMBER, i[3] is a NUMBER.
console.log(arr1);

// current ARRAY ELEMENT OF arr1 is *[1, 2, 3, 4]*

arr1.push(arr2); // prints *[1, 2, 3, 4, [3, 4]] - INDEX(i) - 5 ELEMENTS = i[0-3] is a NUMBER, i[4] is an ARRAY OBJECT.
console.log(arr1);

// THE FOLLOWING STATEMENTS WRITTEN BELOW ARE SUCH ASSUMPTIONS AND ARE NOT YET PROVEN; code is included

let dateParts = [1961, 3, 1];
let birthday = new Date(...dateParts);

console.log(birthday.toDateString());

// this is to make the DATE OBJECT or any FUNCTION or OBJECT WITH PARAMETERS accept even an icomplete set of PARAMETERS

// dateParts = [1961, 3, 16];
// birthday = new Date(dateParts);
// this DATE OBJECT only accepts the required PARAMETERS *...new Date(yyyy, MM - 1, dd);*
// giving it the required PARAMETERS will generate a desired result

// console.log(birthday.toDateString());

// dateParts = [1961, 3];
// birthday = new Date(dateParts);
// this DATE OBJECT only accepts the required PARAMETERS *...new Date(yyyy, MM - 1, dd);*
// otherwise, return an ERROR MESSAGE

// console.log(birthday.toDateString());