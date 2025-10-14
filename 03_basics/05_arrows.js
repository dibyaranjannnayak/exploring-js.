// arrow function: Arrow functions are shorter and often used for simple one-liners.
// Arrow functions don’t have their own this.They use the this value from the surrounding (lexical) scope.
// Arrow functions don't have arguments keyword.
// Arrow function:  cannot be used as a constructor. (using new keyward)
// Arrow functions (assigned to variables) are not hoisted.

const arrowFunc = () => {
    console.log('hi')
}

const arrowFunc1 = (name) => `hello, ${name}`  // implicit return: we don't use the return keyward.
const arrowFunc2 = (name) =>  (`hello, ${name}`)
const arrowFunc3 = () => ({name: 'dibyaa'})     // to retun an object we have to use ().

arrowFunc()
console.log(arrowFunc1('dibya'))
console.log(arrowFunc2('dibyaranjan'))
console.log(arrowFunc3())

// this *****************************************************************************************************
const user = {
    name: 'dibya',
    id: 22,

    welcomeMessage: () => {
        console.log(`hello, ${this.name}`)      // hello, undefined; arrows don't have this keyward.
    }
}

user.welcomeMessage()

// arguments ********************************************************************************************************

const showArgs = (number) => {
  console.log(arguments); // ❌ ReferenceError
}

showArgs(1, 2, 3, 4, 5)