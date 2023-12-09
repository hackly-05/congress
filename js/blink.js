 // Get the button and text elements
 var button = document.getElementById('toggleButton3');
 var text = document.getElementById('redLight3');

 // Add a click event listener to the button
 button.addEventListener('click', function() {
   // Set an interval to toggle the visibility of the text
   var intervalId = setInterval(function() {
     text.style.visibility = (text.style.visibility === 'visible') ? 'hidden' : 'visible';
   }, 100); // 500 milliseconds interval (change as needed)

   // Clear the interval after 2000 milliseconds (2 seconds)
   setTimeout(function() {
     clearInterval(intervalId);
     text.style.visibility = 'visible'; // Ensure the text is visible after stopping the interval
   }, 5000);
   button.addEventListener('click', function() {
    // Change the button background color to red
    
    
  
  });
 });