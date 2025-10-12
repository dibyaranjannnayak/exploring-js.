// Scope - The area or region in your code where a variable is accessible.
// It decides where you can use a variable and where you cannot.
// mostly {} defines the scope.
// We have 3 scopes.
/*
    1. Global scope: A variable declared outside any function or block.
       It can be accessed from anywhere in the code.
    
    2. Function scope(Local scope): Variables declared inside a function are local to that function.
       You cannot access them outside the function.

    3. Block scope: Variables declared with let or const inside a block ({ ... })
       can only be accessed inside that block.

*/

//***  The gloabal scope of the variale in browser, and the global scope of the variable in the code in node enviornment is different


let a = 44
var c = 33



{
    let a = 3
    const b = 4
    var c = 5
}

// console.log(a) // error as a is not accessible
// console.log(b)    // error as b is not accessible
console.log(c) // 5

// Due to this scope issue, we avoid using 'var' to create variable in js.

console.log(a)  //44
console.log(c) //5  as the c inside the blok disrupt the value of the global c variable.