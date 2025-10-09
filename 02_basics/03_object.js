// Oject literals: In JavaScript, this is the simplest and most common way to create objects
// by just using {}, we can create an object. 
/* Singletone: we create only one single instance of an object, and we use that same instance everywhere in our program.
  we can't create multiple instances of it, everytime we access it, we will get the same reference.
  By using constructor, we creat singletone object.
*/

// object store values in 'key: value' pairs.
// we can access values in object using two methods:
// 1. object.key
// 2. object['key']
// for symbol, object[symbol]


//define
// though we definie keys in object as - key,
//but in background it is stored as - 'key'

let mysym = Symbol('sym1')

let person = {
    name: 'lipu',
    age: 18,   
    'full name': 'dibyaranjan Nayak',
    [mysym]: 'mysym1',                  // this is the syntax to use a symbol in object
    emailId: 'dibya@zoho.in',
    loginDate: [1,2,3,4,5]

}

console.log(person.loginDate)
console.log(person['age'])
console.log(person['full name'])
console.log(person[mysym])  // while accessing a symbol we don't need ''.

person.emailId = 'dibyaranjan_nayak@zohomail.in' // the email will change.
console.log(person)

person.greeting = function(){
    console.log(`hello ${this.name}`)
}
console.log(person.greeting())

Object.freeze(person)
person.emailId = 'dibyaranjan_nayak@microsoft.in' // the email won't change, as we freezed the object.
console.log(person)