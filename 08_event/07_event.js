/*
When a keyboard or mouse event occurs, the browser gives you extra properties inside the event object
 that tell you whether modifier keys (like Ctrl, Shift, Alt) were pressed at the same time.

 Property                        Type                           	Meaning

event.altKey                   	Boolean                    	true if Alt key was pressed
event.ctrlKey                  	Boolean                    	true if Ctrl key was pressed
event.shiftKey                 	Boolean                    	true if Shift key was pressed
event.metaKey                  	Boolean                    	true if Command (⌘) on Mac or Windows key on Windows was pressed

document.addEventListener('click', (e) => {
  console.log('Alt pressed?', e.altKey);
  console.log('Ctrl pressed?', e.ctrlKey);
  console.log('Shift pressed?', e.shiftKey);
  console.log('Meta pressed?', e.metaKey);
});
------------------------------------------------------------------------------------------------------------------------------------
keyCode, code, and key

Old property: keyCode
event.keyCode → a numeric code representing the key.
Example:

   65 = “A”
   13 = “Enter”
   27=“Escape”


 -Modern  properties (recommended)
Property                                       	Example value                               	Meaning

event.key                                "a", "A", "Enter", "Shift"                  Actual character / key meaning
event.code                             	"KeyA", "Enter", "ShiftLeft"                	Physical key on keyboard


document.addEventListener('keydown', (e) => {
  console.log('key:', e.key);
  console.log('code:', e.code);
  console.log('ctrl?', e.ctrlKey);
  console.log('shift?', e.shiftKey);
});


document.addEventListener('keydown', (e) => {

  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Ctrl + S shortcut detected!');
  }
});


Event                                               	When it fires

keydown                                 	When key is first pressed (continuous on hold)
keypress                                	When a key produces a character (deprecated)
keyup                                   	When key is released
*/