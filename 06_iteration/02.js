// For loop: The for loop in JavaScript is used when you know how many times you want to repeat something.
/*
for (initialization; condition; increment/decrement) {
    // code to run repeatedly
}
*/
// break: it ends the whole loop;
// continue: it will skip, only current iteration.

const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}



// while loop: The while loop in JavaScript runs a block of code as long as the condition is true.

/*
while (condition) {
    // code to run repeatedly
}
*/

let battery = 10;

while (battery < 100) {
    console.log(`Charging: ${battery}%`);
    battery += 30;
}


//do while: The do…while loop is similar to while, but it runs the code at least once even if the condition is false.
/*
 do {
    // code to run
} while (condition);

 */

let num = 10;

do {
    console.log(num);
    num++;
} while (num < 5);

// Output: 10  (runs once even though condition is false)