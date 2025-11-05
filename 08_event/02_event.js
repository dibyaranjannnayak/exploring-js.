/*

Event Flow::

- When you interact with a web page — say you click a button inside a div inside the body —
  the browser needs to decide which element’s event listener should run first.

- That process is called Event Flow and it happens in three phases:

1. Capturing phase – the event travels down the DOM tree.

2. Target phase – the event reaches the actual element you interacted with.

3. Bubbling phase – the event travels back up the DOM tree.

-------------------------------------------------------------------------------------------------------------------------------
    1. Capturing Phase (Trickle Down)

In this phase, the event moves from the top element (document) down to the target element.

document → html → body → div → button
**** True means you’re listening during capturing phase.

Example:
document.body.addEventListener('click', () => console.log('BODY - capturing'), true);
document.getElementById('parent').addEventListener('click', () => console.log('PARENT - capturing'), true);
document.getElementById('child').addEventListener('click', () => console.log('CHILD - capturing'), true);

the order is:
BODY - capturing
PARENT - capturing
CHILD - capturing

    2. Target Phase

This is when the event reaches the actual element clicked — in our example, the button.

    3. Bubbling Phase (Bubble Up)

After the target phase, the event bubbles back up the DOM — from child → parent → body → html → document.

Example:
If we attach an event listener without the third argument (or with false),
we’re using the default bubbling phase.

document.body.addEventListener('click', () => console.log('BODY - bubbling'));
document.getElementById('parent').addEventListener('click', () => console.log('PARENT - bubbling'));
document.getElementById('child').addEventListener('click', () => console.log('CHILD - bubbling'));

order is:
CHILD - bubbling
PARENT - bubbling
BODY - bubbling

-----------------------------------------------------------------------------------------------------------------------------

Stopping the Flow::

we can stop the event from continuing to bubble or capture, using:

event.stopPropagation();

we can also stop all further event handlers (even on the same element), using:

event.stopImmediatePropagation();

-----------------------------------------------------------------------------------------------------------------------------

- When we attach an event listener (e.g. element.addEventListener('click', handler)), 
the browser’s DOM tree structure keeps a mapping — a data structure (like an event registry) 

- The browser doesn’t just “wait and scan” the DOM every time a click happens.
Instead, it does this immediately:

1. Registers the listener inside an internal event listener map,

2. This is stored directly in the element’s internal memory structure (not in the HTML or DOM markup).
   So the browser knows instantly: “This element has a click listener.”


------------------------------------------------------------------------------------------------------------------------------

- When the user interacts (say, clicks on a button):

1. The browser’s rendering engine does hit testing — it knows exactly which element was clicked 
   (based on pixel coordinates and layout info).

2. That element becomes the event target.

3. The browser then constructs the event propagation path:

    [document, html, body, parentDiv, button]


4. It checks only those elements in that path for registered listeners of that event type (like click).

5. It executes the handlers:

    a. Top to bottom during capturing phase

    b. Bottom to top during bubbling phase














*/