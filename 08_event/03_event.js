/*
timeStamp in event::

- Every event in JavaScript (like click, scroll, keydown, etc.) automatically includes a built-in timeStamp property.
- console.log(event.timeStamp);

event.timeStamp returns the time (in milliseconds) when the event was created.

This value represents the number of milliseconds elapsed since the time the page (or document) was loaded — 
 not the actual date/time of the system clock.

- In simple words, it gives the time of occurance of the event from the last time the page got loaded. 


*/

// You can use timeStamp to calculate how long it took between two user actions.

let lastClick = 0;

btn.addEventListener('click', (e) => {
  if (lastClick) {
    console.log("Time between clicks:", e.timeStamp - lastClick, "ms");
  }
  lastClick = e.timeStamp;
});


/*
  Property	                Description	                              Units	                        Reference Point

event.timeStamp	       Time (ms) when event was created	            milliseconds	                Since page load
Date.now()	           Current absolute system time	                milliseconds	                Since Jan 1, 1970
Use case	           Measure relative timings between events	         —	                               —

*/