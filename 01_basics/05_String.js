const text = 'my boy is working hard'
const text1 = new String('my boy is working hard')

console.log(typeof text)        //string
console.log(typeof text1)       //object

const t1 = 'di'
const t2 = 'bya'
console.log(t1 + t2)   //in modern js its not the most practiced way to work with string
console.log(`${t1}${t2}`) //insted we use template literals.

let namee = 'dibya'
let age = 21
console.log(`Hello my name is ${namee.toLocaleUpperCase()}. I am ${age} years old.`)  //template literals

let di = 'liPu'
console.log(di.toUpperCase())
console.log(di.toLowerCase())
console.log(di[0])
console.log(di.__proto__)
console.log(Object.getOwnPropertyNames(di.__proto__))

