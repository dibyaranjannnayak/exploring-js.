/*
event.preventDefault()

- it is a method of the Event object that tells the browser: Hey, don’t do the default action you were about to do for this event.



---------------------------------------------------------------------------------------------------------------------------------
- When we submit a form, by default the page gets reloaded.


<form id="myForm">
  <input type="text" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stops the page from reloading
  console.log("Form submitted via JS, not reloaded!");
});
</script>


---------------------------------------------------------------------------------------------------------------------------------


   Method	                                                               Purpose

preventDefault()	                               Stops the default browser behavior for that event
stopPropagation()	                               Stops the event from bubbling or capturing further up/down the DOM

---------------------------------------------------------------------------------------------------------------------------------


- preventDefault() only works if the event is cancelable.
You can check this using:

console.log(event.cancelable);

---------------------------------------------------------------------------------------------------------------------------------
*/