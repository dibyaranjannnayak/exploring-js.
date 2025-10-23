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

