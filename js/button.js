 // Get the button and text elements
 var button = document.getElementById('toggleButton3');
 var text = document.getElementById('myText');
 var radio = document.getElementById('redLight3');
 var button2 = document.getElementById('liket');
 var likes = document.getElementById('likes');

 // Add a click event listener to the button
 button.addEventListener('click', function() {
   // Change the button background color to red
   button.style.backgroundColor = 'red';
   
   // Change the text color to blue
   text.style.color = 'green';
   text.style.fontWeight = 'bold';
   text.style.marginLeft = '50px';
   radio.style.border = 'none';
   likes.style.color = 'red';
   
 
 });