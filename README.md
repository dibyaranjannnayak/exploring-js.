# exploring-js.
1.studying about javascript

2.js is mainly an interpreted language, but modern js engines like v8 in google chrome use JIT(just in time) compilation to boost performance.
console.log("welcome")

storage ::  memory space(variables)
        
        > in js we can create memory space to store data using --
                                                    1.const
                                                    2.var
                                                    3.let
                                                    
 1. const -- to store constants, we can't change the value later.
 2. let -- to store variables (scope-block)
 3. var -- to store variables (scope-function)

 ***in modern js we avoid to use var due to function scope issues.



DATA TYPES ::

        -- JavaScript is indeed a dynamically typed language, which means you don't need to declare the data type of a variable when you create it. 
        --The type is determined at runtime based on the value assigned to the variable. This flexibility allows you to write code more quickly and with fewer constraints.

        types::
        1.Primitive data types:

          - These are call by value data types.
          -There are 7 types of primitive data types.

                        a. String- represent textual data.  ('dibya')

                        b. Number- represent number like integer,float. (23,2.2)

                        c. bigInt- represent large integer values beyond safe integer limit. 

                        d. Boolean- represent logical value. (true/false)

                        e. symbol-Symbols are unique and immutable primitives used to create unique identifiers for object 
                           properties. Unlike other data types, every Symbol value is unique. This makes Symbols ideal for adding 
                           unique property keys to objects that won’t collide with keys from other code.

                        f. null- it is the intentional absence of any value.
                                 it is a standalone value.    (id=null)
                                 *but when we check the data type of null it shows as object.            * The datatype of null - 'object'

                        g. undefined- variable is declared but not assigned yet. (car;)   * The datatype of undefined - 'undefined'

                        1. NaN - It's not a special datatype, its a special numeric value;               * The datatype of NaN - 'number'


        2.Non primitive data types:

         -These are also known as reference data types.
         -The data types of all the non primitive data types are object ( function - object function)

                        a. object - It is the collection of key-value pairs.  (person = {name, age:22, id:2222})

                        b.array - It is the ordered collection of values.
                                  It is a type of object.     (contries = ['India','russi','nepal'])

                        c.function - A function is a block of code that is designed to perform a perticular job , executed when called or invoked.                (myFunction = function(){console.log()})

* datatypes
  1. null = object
  2. undefined = undefined
  3. NaN = number


Data Type Conversion ::

                - It is the phenomenon in js where one data type is converted into another either manually or automatically.

                1.Explicit conversion (manual)
                2.Implicit conversion (automatic)

        1.Explicit conversion :
                let str = "123";
                let num = Number(str); // Converts string to number
                console.log(typeof num); // Output: "number"

        2.Implicit conversion :
                let result = "5" + 2; // "52"
                // String concatenation takes precedence, so the number is converted to a string

* When we convert into boolean datatype:


                  1.Boolean(NaN) = false
                  2.Boolean(undefined) = false
                  3.Boolean(null) = false
                  4.Boolean("") = false

* When we convert into number datatype:


                  1.Number(NaN) = NaN
                  2.Number(undefined) = NaN
                  3.Number(null) = 0
                  4.Number("") = 0               

Operations ::

        -There are various types of operations in js.

        1.Arithmetic operations.
        2.Comparision operations.
        3.logical operations.
        4.Bitwise operations.

   1.Arithmetic operations:


                let a = 10;
                let b = 5;
                let sum = a + b;        // Addition: 15
                let difference = a - b; // Subtraction: 5
                let product = a * b;    // Multiplication: 50
                let quotient = a / b;   // Division: 2
                let remainder = a % b;  // Modulus: 0
                let exponent = a ** b;  // Exponentiation: 100000
   
   2.Comparission operations:


      - comparision operators (<,>,<=,>=) work differently compairing to equality operators (==,===)
      - So when we compare two different datatypes using comparision operators, it tries to convert them into numbers.
         /*
                let x = 10;
                let y = '10';

                let isEqual = (x == y);        // Equality: true
                let isStrictEqual = (x === y); // Strict equality: false
                let isNotEqual = (x != y);     // Inequality: false
                let isGreater = (x > y);       // Greater than: false
                let isLess = (x < y);          // Less than: false
                let isGreaterOrEqual = (x >= y); // Greater than or equal to: true
                let isLessOrEqual = (x <= y);  // Less than or equal to: true

             null == 0 //false
             null >= 0 //true  - 0 >= 0
             undefined == 0 //false
             undefined >= 0 //false - NaN >= 0
             NaN == 0 //false
             NaN >= 0 //false - NaN >= 0
         */

     a. In js undefined is lossely equal with null, so ::
             1. null == undefined //true
             2. null >= undefined //false  - 0 >= NaN

     b. In js NaN is not equal to anything, not even with etself ::
             1. undefined == NaN //false
             2. undefined >= Nan //false - NaN >= Nan
             

   3.Logical operations:


                let a = true;
                let b = false;

                let andOperation = (a && b); // Logical AND: false
                let orOperation = (a || b);  // Logical OR: true
                let notOperation = !a;       // Logical NOT: false

   4.Bitwise operations:


                let bitwiseAnd = (5 & 3);   // Bitwise AND: 1
                let bitwiseOr = (5 | 3);    // Bitwise OR: 7
                let bitwiseXor = (5 ^ 3);   // Bitwise XOR: 6
                let bitwiseNot = ~5;        // Bitwise NOT: -6
                let leftShift = (5 << 1);   // Left shift: 10
                let rightShift = (5 >> 1);  // Right shift: 2
                let zeroFillRightShift = (5 >>> 1); // Zero-fill right shift: 2

  5.Unary operators:


                a. Pre-increment/pre-dicrement:
                        let a = 3
                        console.log(++a)     // 4
                        console.log(a)      // 4
                        console.log(--a)    // 3  
                        console.log(a)      // 3
                b. post-increment/post-dicrement:
                        let a = 3
                        console.log(a++)     // 3
                        console.log(a)       // 4
                        console.log(a--)     // 4 
                        console.log(a)       // 3
                


Comparision ::


        - in js when we compare a string with a number, if the string can be converted into number then it turned into number due to type coercion.

        - But if the string can't be then the conversion failed and it remains a string.

                console.log('02' > 1)   //true
                console.log('a12' > 1)  //false

        - conversion and equality operators behave differently 
        - conversion operators(<,>,<=,>=) convert the string or the data type used into      number .

                console.log(null == 0)  //false
                console.log(null < 0)   //false
                console.log(null <= 0)  //true    it converts null into 0 

        * likewise it turns undefined into NaN.
        * But its not adviseable to compare between different datatypes , which is not a clean code.




Memory Location ::


        --There are two areas of memory in js , which is stack and heap.

        Stack:
           -Stack is used for static memory allocation. (primitive data types)
           -This is where local variables and function call informations are stored.
           -The structure is  LIFO .
           -It is smaller in size and automatically managed.

        Heap:
          -Heap is used for dynamic memory allocation, it is where non primitive data types are stored.
          -The heap size is larger .
          -Heap is managed by garbage collector.


          --when we store a original primitive data  in another variable, a copy of the original data is created and stored in the stack. so when we make any change in the second variable it doesn't affect the origina value.
          
          --But when we store the original non primitive data in another variable, a refference is created to the original value so when we make any change in the second variable the original value also get affected.


 ** in primitive copy of data is created while in non primitive data a reference is created.



Array:


        /* In js, array is a special type of object using which we can store multiple values 
          in a single variable.  
        */

        // in js, we can store values of different datatypes in array. 

        // in js, array is mutable(resizeable). We can add and delete values anytime.

        /* The copy of array is shallow coppy, which means the original and the copy both have 
        same reference so, when we make some changes to the copied array the change will refleact in original.
        */




Object:

        // Oject literals: In JavaScript, this is the simplest and most common way to create objects

        // by just using {}, we can create an object. 

        /* Singletone: we create only one single instance of an object, and we use that same instance everywhere in our program.
         1. we can't create multiple instances of it, everytime we access it, we will get the same reference.
         2. By using constructor, we creat singletone object.
        */

        // object store values in 'key: value' pairs.

        // we can access values in object using two methods:

        // 1. object.key
        // 2. object['key']
        // for symbol, object[symbol]



Function::

        -A function in JavaScript is a block of reusable code designed to perform a particular task. You can think of it as a mini-program inside your main program — it takes input (called parameters), processes it, and may return an output.

        syntax-
         function functionName(parameters) {
                 // code to be executed
         return result; // optional
        
        -Parameter: The variables listed inside the function's paranthessis in the function declaration.
                    They act as inputs that the function expects to receive.

        -Arguments: These are the actual values you pass into the function when calling the function.
                    They are the real data that replaces the parameters during execution.


        *say myFunction is the function defined by the developer.
        Then 
                function myFunction(){}  // definition
                myFunction   // reference
                myFunction() // execution




Scope::


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
        //***  The gloabal scope of the variale in browser, and the global scope of the variable in the code in node enviornment  is different



Hoisting::

        /* Hoisting in JavaScript is a behavior where variable and function declarations are moved (or “hoisted”) 
           to the top of their scope — before the code is actually executed.
        */
        // However, only the declarations are hoisted, not the initializations (assignments)
        // JS engine moves the whole function to the top during compilation.


This::


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



Arrow function::


        // arrow function: Arrow functions are shorter and often used for simple one-liners.
        // Arrow functions don’t have their own this.They use the this value from the surrounding (lexical) scope.
        // Arrow functions don't have arguments keyword.
        // Arrow function:  cannot be used as a constructor. (using new keyward)
        // Arrow functions (assigned to variables) are not hoisted.



IIFE::


        // IIFE: IIFE stands for Immediately Invoked Function Expression.
        // It’s a function that executes immediately after it’s defined.
        /*
        Advantages of IIFE
        1. Avoid polluting the global scope.
        2. Create private scopes
        3. Execute setup code immediately
        */



----------------------------------------------------------------------------------------------------------------------------------
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
----------------------------------------------------------------------------------------------------------------------------------


Execution Contex in JS ::


        /*
        In JavaScript, the Execution Context is the environment where your code is evaluated and executed.
        It’s like a box that contains everything the JavaScript engine needs to run your code — variables, functions, and the current scope.
        */

        /*
        An Execution Context (EC) is created whenever a piece of JavaScript code runs.

        There are three main types of execution contexts:

           1. Global Execution Context (GEC) ---	Created when the JavaScript file first runs. It’s the default context.
           2. Function Execution Context (FEC) --- 	Created each time a function is invoked.
           3. Eval Execution Context           --- 	Created inside the eval() function (rarely used).

        */

        // JavaScript uses a stack (LIFO – Last In, First Out) to manage contexts.


        /*
        When JavaScript runs your program, two phases happen inside an execution context:

        a. Creation Phase

           1. A global object is created (window in browser / global in Node).

           2. A special variable called this is created.

           3. Memory is allocated for variables and functions.

           4. Variables are set to undefined, and function declarations are hoisted (their definitions are stored).

        b. Execution Phase

           1. Code runs line by line.

           2. Variable values are assigned.

           3. Functions are executed (creating new Function Execution Contexts).

        */




// Execution contex structure.

        /*
        Lexical scope, also known as static scope, in JavaScript determines the accessibility of variables 
        and functions based on their physical location within the source code at the time of definition, not at the time of execution.
        */

        /*
        Every Execution Context (EC) — whether it’s Global or Function — has three main parts internally:

        1. Variable Environment (VE)

        2. Lexical Environment (LE)

        3. This Binding
        */

        /*
        ***Creation phase.

        a. Creates the Variable Object (VO) or Environment Record, that stores:

                1. All variables and function declarations in the current scope.
                2. Function declarations get hoisted with their entire body.
                3. Variables declared with var are hoisted and initialized to undefined.
                4. let and const are also hoisted but kept in the Temporal Dead Zone (TDZ) until their declaration line.

        b. Sets up the Scope Chain / Lexical Environment

                1. It stores references to outer environments, letting inner functions access outer variables.
                2. This is the foundation for closures.

        c. Sets up the this binding

                1. In global context → this refers to the global object (window in browsers, global in Node).
                2. In function context → this depends on how the function was called.

        */


        /*
        a. Global Execution Context (GEC)

        -This is created only once when the program starts.

                1. Creates the global object (like window in browser).

                2. Creates the global scope — where all top-level variables and functions live.

                3. Binds this to the global object.

                4. Executes top-level code.

                5. After everything finishes, the Global EC stays in memory until the program ends.

        */

        /*
        b. Function Execution Context (FEC)

        -Every time a function is invoked, JavaScript creates a new EC for that function.

        1. Creation Phase

                1. A new Argument Object is created (like arguments).

                2. Local variables and inner functions are hoisted.

                3. Lexical environment is linked to its outer scope.

        2. Execution Phase

                1. Function code runs.

                2. If the function calls another one, a new FEC is pushed to the Call Stack.

        -When the function finishes, its EC is popped off the stack.

        */


----------------------------------------------------------------------------------------------------------------------------------
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
----------------------------------------------------------------------------------------------------------------------------------