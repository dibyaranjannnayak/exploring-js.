//for..in: The for...in loop is used to iterate over the keys/properties of an object.
// Its idal for iteration over object.
// Doesn't work with map,set as they are not simple iterable objects.

/*

Feature	                    for...of	                                    for...in

Iterates-	                Values	                                        Keys/Indexes
Best for-	                Arrays, strings, maps, sets                     Objects
Order guarantee-	        Yes (for arrays)	                            Not guaranteed
Use with Maps/Sets-	        ✅ Yes	                                       ❌ No

*/

/*
for (let key in object) {
    // use key
}

*/

let obj = {
    name: 'dibya',
    id: 222,
    age: 23
}

for(let keys in obj){
    console.log(keys)           // name  id  age
}

for(let keys in obj){
    console.log(`${keys} -- ${obj.keys}`) // name -- undefined id -- undefined age -- undefined
}

for(let keys in obj){
    console.log(`${keys} -- ${obj[keys]}`) // name -- dibya id -- 222 age -- 23
}