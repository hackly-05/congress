function validateUsername() {
    // Get the input value
    const username = document.getElementById('username').value;

    // Define a regular expression that checks for the presence of a number
    const regex = /\d/;

    // Test the username against the regular expression
    const containsNumber = regex.test(username);

    // Get the error element
    const usernameError = document.getElementById('usernameError');

    // Display an error message if the username contains a number
    if (containsNumber) {
        usernameError.textContent = 'Username cannot contain numbers.';
    } else {
        usernameError.textContent = ''; // Clear the error message
    }
}