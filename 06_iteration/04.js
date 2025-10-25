// For..of loop
/*
The for...of loop in JavaScript is used to iterate over iterable data types like:

✅ Arrays
✅ Strings
✅ Maps
✅ Sets
✅ DOM collections
✅ Typed arrays

It gives direct access to values (not indexes like for loop).
*/

// As object is not an iterable datatype, for..of does not work with objects.

/*
for (let element of iterable) {
    // use element
}
*/

let arr1 = ['apple', 'orange', 'pineapple', 'iceapple']

for(let item of arr1){
    console.log(item)
}

let name = 'dibya'

for(let char of name){
    console.log(char)
}

let myMap = new Map([
    ["apple", 10],
    ["orange", 20]
])

for(let item of myMap){
    console.log(item)
}