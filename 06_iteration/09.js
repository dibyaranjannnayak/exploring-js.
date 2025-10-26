// reduce(): it is an Array method that takes all elements of an array and reduces them into a single value.

/*
That value could be:
✔ A sum
✔ A product
✔ A string
✔ An object
✔ Another array
✔ Anything you want!

Simply: reduce combines array values into one value.
*/

/*
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
*/


let prices = [11, 22, 33, 44]

const total = prices.reduce(function(acc, currval){
    return acc + currval;
},0)

// arrow function

const aTotal = prices.reduce((acc, currval) => acc + currval, 0)

console.log(total)
console.log(aTotal)

// real use cases;

const nums = [5, 9, 2, 71, 3];

const max = nums.reduce((acc, curr) => acc > curr ? acc : curr);    // finds max value.

console.log(max); // 71


const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

const count = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { a: 3, b: 2, c: 1 }