// Function.

// Definition
function exponentialFunction(number, power){
    console.log(arguments)
    return number ** power
}

exponentialFunction  // reference

// execution
console.log(exponentialFunction())  // NaN, why - number ** power -  undefined ** undefined
// converted to number - NaN ** NaN = NaN

console.log(exponentialFunction(3, 3, 4, 5, 6))  // javascript simply ignores the extra arguments, but we can acces theem using arguments


function userLogin(user = 'user'){ // default value
    if(!user){
        console.log('Please enter the user name.')  // either we can give default value to user, or can use this code for user name.
        return
    }

    console.log(`Welcome, ${user}!`)
}

userLogin('dibya')


// rest method
function addCartValue(userName, ...value){
    console.log(`Heloo, ${userName}`)
    return value
}

console.log(addCartValue("dibya", 233, 22, 19, 2233, 2))        // [ 233, 22, 19, 2233, 2 ]

userData = {
    userName: 'dibya',
    id: 3333
}

// object as parmeter
function welcomeMessage(obj){
    console.log(`Welcome, ${obj.userName}! Your id is: ${obj.id}`)
}

welcomeMessage(userData)


// array as parrameter
function itemList(arr){
    console.log(arr)
}

itemList([22, 456, 225, 234])  // [ 22, 456, 225, 234 ]