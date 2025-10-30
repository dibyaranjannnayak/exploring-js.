/*
- both HTMLCollection and NodeList are array-like objects in JavaScript.

- That means they share some similarities with arrays — but they’re not real arrays.

- HTMLCollection → Live list of HTML elements only (updates automatically when DOM changes).
Example: document.getElementsByClassName()

- NodeList → Can contain any type of node (elements, text, comments).
May be live or static, depending on how it’s created.
Example:

querySelectorAll() → static NodeList

childNodes → live NodeList
*/

/*
- We can convert HTMLCollection or NodeList, into an array for using the methodos of an array.

*/

const arr = Array.from(document.querySelectorAll("p"));
arr.map(p => p.textContent);

console.log(parent_name.children)       // gives an HTMLCollection of childrens elements in the parent element.

