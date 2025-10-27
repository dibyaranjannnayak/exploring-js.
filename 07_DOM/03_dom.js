// Some commands we use to access document in browswe.

console.log(window)     //the window global object

console.log(window.document)    //The html document object. We can use just document insted of window.document.

console.dir(document) // extract the document object and all other properties related      

console.log(document.baseURI)  // provides us with the URL of the website.

console.log(document.links)  // Gives us all the links in the page, but it won't be as an array.

console.log(document.links[2])  // Provides us with the second link in the webside.



document.getElementById('id_name').innerHTML = "<h1></h1>" // changes the inner html of the element with the id name.

document.getElementsByClassName("mw-page-title-main")[0].innerHTML = "<h1>dibya</h1>"  // same here it change the inner html
// but as multiple elements may have same cllass, we have to provide the index.


document.getElementById('id_name').class        // undefined
document.getElementById('id_name').className    // class_name 
document.getElementById('id_name').id           // id_name

document.getElementById('id_name').getAttribute('id')           // id_name
document.getElementById('id_name').getAttribute('class')           // class_name

document.getElementById('id_name').setAttribute('class', 'newClass_name')           // override existing class_name
document.getElementById('id_name').setAttribute('class', 'existing_cName new_cName') // add a new class_name with the existing one.


const test = document.getElementsByClassName('mw-page-title-main')[0]
test.style.display = 'block'            // the element is span which is an inline element, so, we have to set display block.
test.style.backgroundColor = 'blue'