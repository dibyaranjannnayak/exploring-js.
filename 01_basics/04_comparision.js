console.log('2' > 1)
console.log('02' > 1)
console.log('a12' > 1)


console.log(null == 0)  //false
console.log(null > 0)   //false
console.log(null < 0)   //false
console.log(null <= 0)  //true    , because in conversion(>,<,<=,>=) js converts null to 0 .

console.log(undefined < 0)  
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined <= 0)     //false  undefined -> NaN