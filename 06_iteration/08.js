//map(): map() transforms each element of the array and returns a new array with the transformed elements.

/*
✔ Loops through each element of an array
✔ Applies a function (callback) to every element
✔ Returns a new array with the transformed values
✖ Does not change the original array

In simple terms: map transforms each element and returns a new array.
*/

/*
array.map(callback(element, index, array))
*/



const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);  // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (unchanged)


//we can combine filter amd map for an optimized result.

const ages = [18, 22, 30, 15];

const updatedAges = ages
  .filter(age => age > 21)    // [22, 30]
  .map(age => age + 5);       // [27, 35]

console.log(updatedAges);


//interesting
const tryy = ages.map(age => age >= 18)
console.log(tryy)           // [ true, true, true, false ], we shouldnot use map to filter data.