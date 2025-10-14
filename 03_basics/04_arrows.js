// this is a special keyword that refers to the object that is currently executing the function.

// The value of this changes depending on the context (how and where the function is called).

/*
    In the global scope:
            1. In browser, this refers to the window object.
            2. In Node.js, it refers to the global object (or {} in modules).
    
    Inside an Object Method:
            * When a function is called as a method (object’s property),
             this refers to the object that owns the method.

    In a Regular Function (Not a Method):
            1. In non–strict mode, this = global object (window)
            2. In strict mode, this = undefined

    In Arrow Functions:
            * Arrow functions don’t have their own this.
            * They inherit this from their surrounding (lexical) scope.

*/


const user = {
    name: 'dibya',
    id: 22,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our system.`)
        console.log(this)       // the whole user object
    },
  
}

user.welcomeMessage()
user.name = 'dibyaranjan'
user.welcomeMessage()
console.log(this)       // {}


