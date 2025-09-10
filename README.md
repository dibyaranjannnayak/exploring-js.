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

        types:
        1.Primitive data types

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

                        g. undefined- variable is declared but not assigned yet. (car;)                  * The datatype of undefined - 'undefined'

                        h. NaN - not a number (special type of datatype) datatype(NaN) = number;


        2.Non primitive data types
         -These are also known as reference data types.
         -The data types of all the non primitive data types are object ( function - object function)

                        a. object-It is the collection of key-value pairs.  (person = {name, age:22, id:2222})

                        b.array-It is the ordered collection of values.
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
                let x = 10;
                let y = '10';

                let isEqual = (x == y);        // Equality: false
                let isStrictEqual = (x === y); // Strict equality: false
                let isNotEqual = (x != y);     // Inequality: true
                let isGreater = (x > y);       // Greater than: false
                let isLess = (x < y);          // Less than: true
                let isGreaterOrEqual = (x >= y); // Greater than or equal to: false
                let isLessOrEqual = (x <= y);  // Less than or equal to: true

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


Comparision ::
        - in js when we compare a string with a number, if the string can be converted into number then it turned into number due to type coercion.
        - But if the string can't be then the conversion failed and it remains a string.

                console.log('02' > 1)   //true
                console.log('a12' > 1)  //false

        - conversion and equality operators behave differently , conversion operators(<,>,<=,>=) convert the string or the data type used into number .

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
