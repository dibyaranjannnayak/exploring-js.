/*
Coordinate System	                                 Refers To	                                             Used By

Screen	                                       Entire monitor/screen	                                   OS & hardware
Client (Viewport)	                     Visible part of the browser window	                               Browser layout
Page	                              Entire webpage (including scrolled parts)	                           DOM / Document

So, screen > client > page (in scope).


+----------------------------------------------------------+
|  🖥️  Entire monitor (screenX, screenY from here)          |
|                                                          |
|  +-----------------------------------------------+       |
|  |  Browser viewport (clientX, clientY from here) |       |
|  |  -------------------------------------------  |       |
|  |  Web page (scrollable area, pageX, pageY)     |       |
|  |                                               |       |
|  +-----------------------------------------------+       |
|                                                          |
+----------------------------------------------------------+


<div id="test" style="width:200px;height:200px;background:lightblue;"></div>

<script>
  document.getElementById('test').addEventListener('click', (e) => {
    console.log("clientX:", e.clientX);
    console.log("clientY:", e.clientY);
    console.log("screenX:", e.screenX);
    console.log("screenY:", e.screenY);
    console.log("pageX:", e.pageX);
    console.log("pageY:", e.pageY);
  });
</script>

clientX: 420
clientY: 210
screenX: 470
screenY: 270
pageX: 420
pageY: 810

*/