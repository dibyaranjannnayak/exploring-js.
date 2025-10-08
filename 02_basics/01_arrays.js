/* In js, array is a special type of object using which we can store multiple values 
   in a single variable.  */
// in js, we can store values of different datatypes in array. 
// in js, array is mutable(resizeable). We can add and delete values anytime.
/* The copy of array is shallow coppy, which means the original and the copy both have 
same reference so, when we make some changes to the copied array the change will refleact in original.
*/

let arr1 = [11, 22, 33, 44, 'dibya', 'yes']
console.log(arr1)

let arr2 = new Array(1,2,3,4,5)
console.log(arr2)

console.log(arr1[2])

//methods

arr1.push(9) // add 9 in the end of the array.
arr1.push(99)
console.log(arr1)

arr1.pop() // remove the last element.
arr1.pop()
console.log(arr1)

arr1.unshift(1) // add 1 at the starthing of the array.
arr1.unshift(10)
console.log(arr1)

arr1.shift() // remove the first element(10) from the starting of the array.
 arr1.shift()
console.log(arr1)

console.log(arr1.includes(77))  //false
console.log(arr1.indexOf('dibya'))  //4

let stringArray = arr1.join()
console.log(stringArray)    // gives all the elements of the array but as a string separated by comma(,)

// slice and splice
//slice doesnot include the range, but splice include the range 
// slice doesnot affect the original array, while splice remove the elements from the original array.

let slice1 = arr1.slice(1,4)
console.log(slice1)     // [ 22, 33, 44 ]
console.log(arr1)       // [ 11, 22, 33, 44, 'dibya', 'yes' ]

let splice1 = arr1.splice(1,4)
console.log(splice1)        // [ 22, 33, 44, 'dibya' ]
console.log(arr1)           // [ 11, 'yes' ]