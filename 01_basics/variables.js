const passwordId = 221
var name = 'dibya'          // not preferable due to functional scope issues.
let age = 21
city = 'bhubaneswar'  //possible to declare without any keyword(var,let,const) but not preferable.


// passwordId =222            not allowed(TypeError: Assignment to constant variable.)  
// console.log(passwordId)


name = 'Dibya'
age = 22
city = 'Bhubaneswar'
console.table([name, age, city ])


let accountState            // value : undefined
console.log(accountState)