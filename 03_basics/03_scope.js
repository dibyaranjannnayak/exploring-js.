/* Hoisting in JavaScript is a behavior where variable and function declarations are moved (or “hoisted”) 
   to the top of their scope — before the code is actually executed.
*/
// However, only the declarations are hoisted, not the initializations (assignments)

// Function hoisting.

// JS engine moves the whole function to the top during compilation.
funceOne(4)                 // function call before the declaration. 
function funceOne(value){
    console.log(value)
}


 funcTwo(5)     // it wont'work, 
let funcTwo = function(value){
    console.log(value)
}
// in this method of function declaration, we are intializing the variable with the function, and js don't host initialization.

