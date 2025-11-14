/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>event</title>
</head>
<body id="body">
    
    <ul class='event' id="container">
        <li class="event" id="e1"><div style="height:60px;border: 2px solid purple;  width: 60px; background-color: black; color: wheat;">box1</div></li>
        <li class="event" id="e2"><div style="height:60px; border: 2px solid purple; width: 60px; border: 2px bold purple; background-color:blue ;">box2</div></li>
        <li class="event" id="e3"><div style="height:60px; border: 2px solid purple; width: 60px; border: 2px bold purple; background-color: red;">box3</div></li>
        <li class="event" id="e4"><div style="height:60px; border: 2px solid purple; width: 60px; border: 2px bold purple;background-color:yellow ;">box4</div></li>
        <li class="event" id="e5"><div style="height:60px; border: 2px solid purple; width: 60px; border: 2px bold purple; background-color: pink;">box5</div></li>
    </ul>

</body>
<script>

    // document.getElementsByClassName('event')[0].onclick = function(e){
    //     alert('hi')
    // }

    // document.getElementsByClassName('event')[0].addEventListener('click', function(e){
    //     alert('container activated')
    //     console.log(e)
    //     console.log(e.timeStamp)
    //     // console.log(e.target)
    // },false)


    // document.getElementById('e2').addEventListener('click', function(e){
    //     alert('b2 activated')
    //     console.log(e)
    //      e.stopPropagation()
    // }, false)

    // document.querySelector('#body').addEventListener('copy', function(event){
    //     alert('what is the matter')
    //     console.log(event)
    //     event.stopPropagation()
    // },false)

    

    document.querySelector('#container').addEventListener('click', (event) => {
        console.log(event.target)
        let removeElement = event.target.parentNode
        if (event.target.tagName === 'DIV'){
              
            //   removeElement.remove()
             removeElement.parentNode.removeChild(removeElement)
        }
      
    })
    

</script>
</html>

*/