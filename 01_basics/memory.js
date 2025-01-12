 // stack.  &   Heap.
 // all primitive data types are stored in stack.
 // all non primitive data types are stored in Heap.
 /* 
 while storing  a primitive data type in another variable in stack a copy of the original data is stored, so if we change the 
 copy if won't affect 
 the original data.

 But in case of non-primitive data type a reference of the original data is stored in stack, while the original data is stored in
 heap. and when we store the original  data in another variable a reference to the original value is created insted of creating
 a copy so if we change in the second variable the original value also get modified. 
 */

 let originalData = 'Dibya'

 let copyData = originalData
 copyData = 'Lipu'

 console.table([originalData, copyData]) // here the original value is 'Dibya' while the copy data is 'Lipu'



 let OriginallData = {
    namee: 'Dibya',
    age: 20
 }

 let copyyData = OriginallData
 copyyData.age = 21

console.log(OriginallData)  
console.log(copyyData)  // as here we are refering to the original data the original value also changes