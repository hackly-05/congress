document.addEventListener('DOMContentLoaded', function() {
			const zoomImage = document.getElementById('zoomImage');
			let zoomedIn = true;
		  
			setInterval(function() {
			  if (zoomedIn) {
				zoomImage.style.transform = 'scale(1.5)';
			  } else {
				zoomImage.style.transform = 'scale(1)';
			  }
		  
			  zoomedIn = !zoomedIn;
			}, 2000); // Change the interval duration as needed (3000 milliseconds = 3 seconds)
		  });