//forEach: The forEach() method is an array method used to execute a function once for each element in an array.
// It takes a callback function.

/*
It is only for arrays — not for objects directly.

array.forEach(function(currentValue, index, array) {
    // code to execute
});
*/

// For each method returns undefined. It doest not return anything.
//You cannot break a forEach loop early (no break or continue)

let fruits = ['apple', 'orange', 'mango', 'bananna']

fruits.forEach(function(fruit){
    console.log(fruit)
})


//using arrow function

fruits.forEach(fruit => console.log(fruit))

fruits.forEach((fruit) => { console.log(fruit)})

fruits.forEach((fruit, idx, arr) => {
    arr[idx] = fruit.toUpperCase();
});

console.log(fruits);    // [ 'APPLE', 'ORANGE', 'MANGO', 'BANANNA' ]



// For each returns undefined.

let item = fruits.forEach((fruit) => { 
    console.log(fruit)
    return fruit;

})
console.log(item)       // undefined.

