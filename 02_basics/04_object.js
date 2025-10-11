// creating objet using cunstructor.(singleton)
let mobj = new Object()
let nobj = {}   // normal using object literal.

// There is only difference between mobj and nobj; mobj is a singletone object.

const appUser = { 
    email: 'dibyaranjan_nayak@zohomail.in',

    username: {
        level: 1,
        fullName: {
            firstName: 'Dibyaranjan',
            lastName: 'Nayak'
        }
    }
    
}

// console.log(appUser)
console.log(appUser.username.fullName.firstName)
console.log(appUser['username']['fullName']['firstName'])

const obj1 = {1: '1', 2: '2'}
const obj2 = {3: '3', 4: '4'}
const obj3 = {5: '5', 6: '6'}
// to combine objects we use assign method; syntax: Object.assign(target, source)

let sObj = Object.assign({}, obj1, obj2, obj3)
console.log(sObj)

// we generally use spead method to combine objects

const cObj = {...obj1, ...obj2, ...obj3}
console.log(cObj)

// database sends data in array of objects.

const user = [
    {id: 1},
    {id: 2},
    {id: 3}
]

console.log(user[0].id)

//gives array of keys or values.
console.log(Object.keys(sObj))
console.log(Object.values(sObj))
console.log(Object.entries(sObj))   //gives an array of arrays of 'key: value' pairs.

//check if the property is available or not.
console.log(appUser.hasOwnProperty('email'))