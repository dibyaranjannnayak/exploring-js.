// dom content extraction.

<h1 id= 'con'> hello dibya, how are you doing? <span style='display: none'>test content</span></h1>

document.getElementById('con').innerText // hello dibya, how are you doing?
// inner text gives only visible text

document.getElementById('con').textContent // hello dibya, how are you doing? test content
//test content gives even hidden text because of any cssy style like display: none, or any other property

document.getElementById('con').innerHTML  // hello dibya, how are you doing? <span style='display: none'>test content</span>

document.querySelectorAll('element name')  // returns all the elments matching with the name provided
document.querySelector('h1')        //it gives the first h1 element.

document.querySelector('#con')        //it gives the first h1 element with id name con.

document.querySelector('input[type="password"]')   // return input element with the password type.


// in queryselector method, we can select the element by providing the element name(ex. h1, ul, ol) or
// we can give the class or id name following by the css selector (ex. #id_name, .class_name)
// We can also other css selectors like p:first-child

// when we use querySelectorAll, we receive a nodeList.
// nodeList is not equal to an array, but have some similarities to array like indexing and forEach loop. but doesn't have map etc.

// When we wse getElementsByClassName, we receive a htmlcollection, it has some similarities to array.
// it has indexing and so can use for loop, but don't have forEach loop property.
