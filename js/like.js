 // Function to play button click sound
 function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
}

// Function to get the current like count from local storage
function getLikeCount() {
    return parseInt(localStorage.getItem('likeCount')) || 0;
}

// Function to set the like count in local storage
function setLikeCount(count) {
    localStorage.setItem('likeCount', count);
}

// Initialize like count
let count = getLikeCount();

// Update the HTML element with the initial count
document.getElementById('likeCount').innerText = count;

// Function to update like count
function like() {
    // Increment the count
    count++;

    // Update the HTML element with the new count
    document.getElementById('likeCount').innerText = count;

    // Update local storage with the new count
    setLikeCount(count);

    // Play the button click sound
    playClickSound();
}