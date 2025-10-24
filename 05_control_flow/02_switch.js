/*
switch (expression) {
    case value1:
        // Code to execute when expression === value1
        break;

    case value2:
        // Code to execute when expression === value2
        break;

    default:
        // Code to execute if no case matches
}
*/

/*
-break stops the switch from checking the next cases after getting the matching valued case.

-Without break, JS continues to run other cases too (called fall-through)
-One thing to note— it will execute all other cases, only if it doesn't come across a break statement.
*/


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

/*
Grouping cases:

Use this when multiple cases share same result:
*/

let color = "blue";


switch(color){
    case 'red':
    case 'blue':
    case 'yellow':
        console.log("it's a primary color");
        break;
    default:
        console.log("it's not a primary color");
}