const userData = {
    userSystemId: 2334,
    userLevel: 3,
    userName: 'dibya',
    userFunction: 'devloper'
}

// to access a value we use . or [] operator
console.log(userData.userFunction)

// but we can also destructure it for convinience, if we are accessing the property frequently.
const {userSystemId} = userData
console.log(userSystemId) // now we don't have to mention userData.userFunction, insted we can use only userStemId.

// we can also give it a short name for convinience.
const {userFunction: func} = userData

console.log(func)
