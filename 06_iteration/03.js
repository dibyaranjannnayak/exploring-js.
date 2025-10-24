// map object
/*
-a Map object is a collection of key-value pairs where the keys can be of any data type, including objects or functions. 
-This distinguishes it from plain JavaScript objects, which are limited to string or Symbol keys.
-Map objects also maintain the original insertion order of their keys, and offer methods for efficient manipulation of data. 
*/

/*
-Flexible Keys: Unlike regular objects, Map objects can use any data type as a key, 
               such as numbers, booleans, objects, or even other Map objects.

-Insertion Order Preservation: Map objects remember the order in which key-value pairs were inserted, 
                              and iteration over a Map will follow this order.

-Also the key value pairs in map are unique.

-Built-in Size Property: The size property directly provides the number of key-value pairs in the Map.
*/


let myMap = new Map()

myMap.set("name", "Dibya");
myMap.set(10, "age as number key");
myMap.set({ id: 1 }, "object key");

console.log(myMap.get("name")); // Dibya
console.log(myMap.get(10)); // age as number key

myMap.has("name"); // true
myMap.delete(10); // removes key 10
myMap.clear(); // removes all entries

for (let key of myMap.keys()) {
    console.log(key);
}


for (let value of myMap.values()) {
    console.log(value);
}

for (let [key, value] of myMap) {
    console.log(key, value);
}