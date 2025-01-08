// in js oficially the data types are devided into two types
                            //1.Primitive data types      (call by value)
                            //2.Non primitive data types  (call by referance)


            /* 
            1.Primitive data type:

                        -There are 7 types of primitive data types.
                          1.String
                          2.Number
                          3.Boolean
                          4.null
                          5.undefined
                          6.symbol
                          7.BigInt


            2.Non primitive data type(reference data type)

                            1.objects
                            2.Arrays
                            3.Functions
            */


 const myArray = ["japan","s.korea","n.korea"]

 const myObject ={
    name : "Dibya",
    score : 20.3,
    type : "fighter"
 }

 const myfunction = function(){
    console.log("function")
 }

 //The data types of all the non primitive data type is object (function - object function)

 console.log(typeof myArray)
 console.log(typeof myObject)
 console.log(typeof myfunction)