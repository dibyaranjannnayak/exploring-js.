 const marvel_heros = ['antman', 'spiderman', 'ironman', 'thor']
 const dc_heros = ['superman', 'batman', 'flash']

 marvel_heros.push(dc_heros)
 console.log(marvel_heros) // [ 'antman', 'spiderman', 'ironman', 'thor', [ 'superman', 'batman', 'flash' ]]
 // as array can contain different datatypes, it pushed the whole array as value.
 marvel_heros.pop()

 const all_heros = marvel_heros.concat(dc_heros)
 console.log(all_heros)     // [ 'antman', 'spiderman', 'ironman', 'thor', 'superman', 'batman', 'flash']
 // concat add two arrays and in the output give a new array.

 const spread_all_heros = [...marvel_heros, ...dc_heros]
 console.log(spread_all_heros)
 // it will merge the two arrays item by item by spreading the whole array, generally it is used to merge arrays as you can add multiple arrays.
 // [ 'antman', 'spiderman', 'ironman', 'thor', 'superman', 'batman', 'flash']


 const complex_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, 11, [12, 13]]]
 const unti_array = complex_array.flat(Infinity)
 console.log(unti_array)  // [ 1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13]
 // it breaks the array till the infinity depth.


 console.log(Array.isArray('dibya'))    // false
 console.log(Array.from('dibya'))       // [ 'd', 'i', 'b', 'y', 'a' ]
 console.log(Array.from({name: 'dibya'})) // []

 const score1 = 100
 const score2 = 200
 const score3 = 300
 console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]