# exploring-js.
studying about javascript

console.log("welcome")

storage::  memory space(variables)
        
        > in js we can create memory space to store data using --
                                                    1.const
                                                    2.var
                                                    3.let
                                                    
 1...const -- to store constants, we can't change the value later.
 2...let -- to store variables (scope-block)
 3...var -- to store variables (scope-function)

 ***in modern js we avoid to use var due to function scope issues.



DATA TYPES::

        -- JavaScript is indeed a dynamically typed language, which means you don't need to declare the data type of a variable when you create it. 
        --The type is determined at runtime based on the value assigned to the variable. This flexibility allows you to write code more quickly and with fewer constraints.

        types:
        1.Primitive data types
                        a. String- represent textual data.  ('dibya')

                        b. Number- represent number like integer,float. (23,2.2)

                        c. bigInt- represent large integer values beyond safe integer limit. 

                        d. Boolean- represent logical value. (true/false)

                        e. symbol-Symbols are unique and immutable primitives used to create unique identifiers for object 
                           properties. Unlike other data types, every Symbol value is unique. This makes Symbols ideal for adding 
                           unique property keys to objects that won’t collide with keys from other code.

                        f. null- it is the intentional absence of any value.
                                 it is a standalone value.    (id=null)

                        g. undefined- variable is declared but not assigned yet. (car;)


        2.Composite data types

                        a. object-It is the collection of key-value pairs.  (person = {name, age:22, id:2222})

                        b.array-It is the ordered collection of values.
                                It is a type of object.     (contries = ['India','russi','nepal'])