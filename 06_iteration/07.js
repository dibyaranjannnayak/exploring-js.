// As for each doesn't return anything though we have some methods to do it, we use filter() and map()
/*
The filter() method in JavaScript is an array method used to create a new array, 
containing only the elements from the original array that satisfy a specific condition. It does not modify the original array.
*/

/*
array.filter(callbackFunction(element, index, array))
*/

/*
✔ Loops through each element
✔ Checks a condition (callback function)
✔ Returns a new array with elements that passed the condition
✖ Doesn’t change the original array
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using an arrow function for conciseness
const oddNumbers = num.filter(number => number % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]



const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 16 },
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// [ { name: "Bob", age: 21 } ]