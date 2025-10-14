// IIFE: IIFE stands for Immediately Invoked Function Expression.
// It’s a function that executes immediately after it’s defined.
/*
Advantages of IIFE
    1. Avoid polluting the global scope.
    2. Create private scopes
    3. Execute setup code immediately
*/

// emample:

(function iife() {
    console.log('hi')
})();       // normally we don't use ; in js, but while declaring two IIFE we use ;, as IIFE don't know where to end.


// with parameter
(function iife1(name) {
    console.log(`hi, ${name}`)
})('dibya');


// arrow function
((name) => {
    console.log(`hi, ${name}`)
})('dibyaa');


// don't polute global variable
(function() {
  const message = "Private variable";
  console.log(message);
})();
console.log(message); //  Error: message is not defined