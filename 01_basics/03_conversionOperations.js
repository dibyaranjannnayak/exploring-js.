let score = '33'
let score1 = '33abc'
let score2 = null                       //null(mistake of js)
let score3 = undefined

console.log(typeof score2) 
console.log(typeof score3)          

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                  //33

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)                 //NaN

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)                 //0

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)                 //NaN



/*
 ->number 
33 -> 33
'33' -> 33
'dibya' / '33abc' -> NaN
null -> 0
undefined -> NaN
true -> 1; false -> 0

*/

let isLogged = 0
let isLogged1 = ''
let isLogged2 = ' '
let isLogged3 = undefined         // '' / NaN / undefined / null  -> false

let booLogged = Boolean(isLogged)
console.log(booLogged)              //false

let booLogged1 = Boolean(isLogged1)
console.log(booLogged1)             //false

let booLogged2 = Boolean(isLogged2)
console.log(booLogged2)             //true

let booLogged3 = Boolean(isLogged3)
console.log(booLogged3)             //false


/* 
->boolean
0 -> false
NaN -> false
undefined -> false
null -> false
'' -> false
'dibya' -> true
*/

let num = undefined

let sNum = String(num)
console.log(typeof sNum)
console.log(sNum)

/*
-> string
NaN -> Nan
null -> null
undefined -> undefined

*/

let _1 = 3 + '3'
console.log(_1)         //33

let _2 = 5 - '3'
console.log(_2)         //2