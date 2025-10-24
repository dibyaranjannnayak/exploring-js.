// Falsy: In js, there are some defined values, which are considered as false(negative) by default.
// Truthy: reset other values are true, known as truthy values.

// Falsy values:  false, 0, -0, BigInt 0n, "", undefined, null, NaN
// Rest other values are truthy values.

// Truthy values(example): '0', 'false', " ", [], {}, function(){}



let cartList = []
let userData = {}

if(cartList.length === 0) console.log('empty');

if(Object.keys(userData).length === 0) console.log('empty');