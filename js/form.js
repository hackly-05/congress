const slider = document.querySelector('.slider');

// Function to switch between login and signup forms
function toggleForm(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login submitted');
});

// Event listener for signup form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sign Up submitted');
});