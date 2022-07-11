console.log('we are at tut 7 :- Array ');
let mark=[23,54,77,99,89,90,43,52];
let fruits=['Orange', 'Pineapple','Mango']
const mixed=['ABC', 54,['XYZ',9876]];
const arr = new Array(234,87,98,'orange'); // we can create array with mixed datatype.


console.log(mark);
/*console.log(mixed);
console.log(fruits);  // we can display perticular element from array 
console.log(arr.length) // it use to show the length of the array


fruits[1]='Apple';
console.log(fruits);

/////////////////////////index off array/////////////
let arrelement = fruits[1];
console.log('element',arrelement);*/

let value = mark.indexOf(89)
console.log(value);
mark.push('hello');
console.log(mark)
mark.unshift('hey');
console.log(mark)
mark.splice(0,2)
console.log(mark)

mark= mark.concat(fruits);
console.log(mark);



