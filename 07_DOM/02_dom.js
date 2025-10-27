/*
The DOM doesn’t only represent HTML elements —
It also gives JavaScript access to their styles (CSS).

When an element becomes a DOM object, it gets a special property:
➡️ .style
which allows JS to read or modify the element’s inline styles.
*/

/*
- Ways JavaScript Changes CSS via DOM
    Method	                                                            How it works
.style property	                                                    Directly sets inline CSS
Changing class	                                                    Apply or remove CSS classes
Changing attributes	                                                 Example: updating class or id
Manipulating stylesheets	                                         Advanced, editing CSS rules
*/

/*
➡️ The browser converts HTML + CSS into DOM + CSSOM
➡️ Both merge into Render Tree
➡️ JS can modify DOM/CSSOM
➡️ Browser re-renders the UI immediately


HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree → Display
*/


const heading = document.querySelector("h1");
heading.textContent = "DOM Manipulated!";
heading.style.color = "blue";

document.querySelector("button").addEventListener("click", function(){
  alert("Button Clicked!");
});