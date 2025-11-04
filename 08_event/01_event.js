/*
- In JavaScript, an event is an action or occurrence that happens in the browser 
  and it can be detected by JavaScript — allowing your code to respond to it.

  Category	                    Example Events	                                                    Description
------------------------------------------------------------------------------------------------------------------------------
Mouse Events	     click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove	Triggered by mouse actions

Keyboard Events	              keydown, keypress, keyup	                                    Triggered by keyboard actions

Form Events	                  submit, change, focus, blur, input	                        Related to form elements

Window Events	              load, resize, scroll, unload	                                Related to the browser window

Clipboard Events	          copy, cut, paste	                                            Triggered when copying or pasting


--------------------------------------------------------------------------------------------------------------------------------
Ways to Handle Events::

 1 - Inline Event Handling (HTML way) 
        <button onclick="alert('Button clicked!')">Click Me</button>

 2 - DOM Property Method
        button.onclick = function() {}

 3 - addEventListener() Method (Modern & Recommended)
        button.addEventListener('click', function(){})


- When an event happens, JavaScript automatically passes an event object with information about that event.

    button.addEventListener('click', function(event) {
        console.log(event)  //gives the event object.

        console.log(event.type);   // click
        console.log(event.target); // <button id="btn">Click Me</button>
    });

--------------------------------------------------------------------------------------------------------------------------------

Event Flow (Bubbling & Capturing)::

- When an event occurs in a nested element (like a button inside a div), it can travel in two phases:

Capturing Phase: Event goes from top → down (document → element)

Bubbling Phase: Event goes from element → up (element → document)

- By default, JS uses bubbling, but you can set { capture: true } to use capturing.

Example:
parent.addEventListener('click', () => console.log('Parent'), true); // capturing
child.addEventListener('click', () => console.log('Child'));         // bubbling
    
-------------------------------------------------------------------------------------------------------------------------------

Event Delegation::

- Instead of adding event listeners to multiple child elements, 
  we can attach one to their common parent and handle all child events from there.

  Example:
   //here we are adding event listner to the whole list insted of adding it to lists one by one. 

  document.getElementById('list').addEventListener('click', function(e) {

  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }

  });














*/