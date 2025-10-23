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