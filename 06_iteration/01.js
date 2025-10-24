/*
Nullish Coalescing Operator (??): in JavaScript it is used to provide a fallback value only when 
the left-hand side is null or undefined.

syntax:
let result = value ?? fallback; 
*/
// Ternary Operator(?):in JavaScript it is a shorthand way to write a simple if…else condition — in one line.
// condition ? valueIfTrue : valueIfFalse


let username = null;
console.log(username ?? "Guest");
// Output: Guest

// || checks for any falsy value, while ?? checks only for null and undefined.

let count = 0;

console.log(count || 10);  // Output: 10  (0 is falsy)
console.log(count ?? 10);  // Output: 0   (0 is NOT null or undefined)

// real life use cases.

function greet(name) {
  return `Hello, ${name ?? "Anonymous"}!`;
}

console.log(greet());          // Hello, Anonymous!
console.log(greet("Dibya"));   // Hello, Dibya!


let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Adult

let marks = 85;
let result = marks >= 90 ? "A"
            : marks >= 70 ? "B"
            : "C";