// DOM: it stands for Document Object Model.
/*
-It is a programming interface provided by the browser that represents your HTML document as a tree of objects.
-DOM is how JavaScript sees and interacts with your webpage.
*/

/*
- In the DOM, everything is represented as a node.
- JavaScript represents those nodes as objects.

- A DOM node = A JavaScript object that represents part of the document
*/

/*
They refer to the same thing from different perspectives:
Tree structure → Node 
JavaScript side → Object
*/

/*
Concept	                                                Focus	                                                    Term Used

Structure in the document tree	        Relationship like parent, child, sibling	                                   Node
Programmatic behavior	                Properties & methods in JavaScript	                                           Object

*/



/*
Document
 └── html
      └── body
           ├── h1
           └── p



Element Node: <p>
 ├─ Attribute Node: class="info"
 └─ Text Node: "Hello"
*/

/*

✅ Change content
✅ Add or remove elements
✅ Change CSS dynamically
✅ React to user events like click, scroll, key press
✅ Create animations, popups, dynamic UI

*/

//some important DOM methods.

/*

getElementById()                        	        Select element by ID
getElementsByClassName()                        	Select elements by class
querySelector()                     	            Select first matching element
querySelectorAll()                      	        Select all matching elements
createElement()                     	            Create new HTML element
append() / appendChild()                        	Add element to page
remove()                        	                Remove element

*/