/*
event.target

target refers to the actual element on which the event originally occurred(the deepest element that was clicked, hovered, etc)

<script>
document.getElementById('parent').addEventListener('click', (e) => {
  console.log("event.target:", e.target.id);
});
</script>

--------------------------------------------------------------------------------------------------------------------------------

event.currentTarget

- currentTarget refers to the element whose event listener is currently running.

- So, if an event bubbles up through multiple elements, currentTarget changes at each step — 
  it’s the element currently handling that event.

  document.getElementById('parent').addEventListener('click', (e) => {
  console.log("target:", e.target.id);
  console.log("currentTarget:", e.currentTarget.id);
});

Outupt:

 target: child
 currentTarget: parent


 -------------------------------------------------------------------------------------------------------------------------------

 event.srcElement (Old IE property)

   - srcElement is an old, non-standard version of target.
   - It was used in Internet Explorer before target became standard.

Today, modern browsers treat it as an alias for target.

         So event.srcElement === event.target in almost all cases.

Use target, not srcElement.

--------------------------------------------------------------------------------------------------------------------------------

toElement & fromElement  (mouse events only.)

 - toElement is used with mouse events like mouseover or mouseout.
   It indicates the element the pointer moved to.

 - fromElement → used in mouseover (where the mouse came from).

 - Both (toElement, fromElement) are legacy — replaced by modern: event.relatedTarget


             Event	                                                              Triggered when…

            mouseover	                                                    The pointer enters an element
            mouseout	                                                    The pointer leaves an element


inner.addEventListener('mouseover', (e) => {
  console.log('Event:', e.type);                                Event: mouseover
  console.log('fromElement:', e.fromElement?.id);               fromElement: outer
  console.log('toElement:', e.toElement?.id);                   toElement: inner

});


- Because fromElement and toElement were non-standard (IE-only),
  modern browsers replaced them with one property: event.relatedTarget

  Works in both mouseover and mouseout.

- For mouseover: relatedTarget = element mouse came from
- For mouseout: relatedTarget = element mouse goes to

inner.addEventListener('mouseover', (e) => {
  console.log('Mouse entered from:', e.relatedTarget?.id);
});

inner.addEventListener('mouseout', (e) => {
  console.log('Mouse left to:', e.relatedTarget?.id);
});
*/