 // Function to generate a random sum CAPTCHA
 function generateCaptchaSum() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var sum = num1 + num2;

    return {
      equation: num1 + " + " + num2,
      answer: sum
    };
  }

  // Function to reload the CAPTCHA
  function reloadCaptcha() {
    var captchaInput = document.getElementById('captcha');
    var captchaError = document.getElementById('captchaError');
    var captchaSum = document.getElementById('captchaSum');

    // Clear previous error messages
    captchaError.innerHTML = "";

    // Generate a new sum CAPTCHA
    var captchaData = generateCaptchaSum();

    // Display the sum in the HTML
    captchaSum.textContent = "Sum: " + captchaData.equation;

    // Set the answer in a data attribute for later validation
    captchaSum.setAttribute('data-answer', captchaData.answer);

    // Set the CAPTCHA input field empty
    captchaInput.value = "";

    // Focus on the CAPTCHA input field
    captchaInput.focus();
  }

  // Form validation function
  function validateForm() {
    // Other form validation logic...

    // Validate CAPTCHA
    var captchaInput = document.getElementById('captcha');
    var captchaError = document.getElementById('captchaError');
    var captchaSum = document.getElementById('captchaSum');

    if (captchaInput.value === "") {
      captchaError.innerHTML = "Please enter the sum result";
      return false;
    }

    // Validate the sum result
    var expectedAnswer = parseInt(captchaSum.getAttribute('data-answer'));
    var userAnswer = parseInt(captchaInput.value);

    if (userAnswer !== expectedAnswer) {
      captchaError.innerHTML = "Incorrect sum result";
      return false;
    }

    // Form is valid
    alert("Form submitted successfully!");

    // Prevent actual form submission
    return false;
  }

  // Initial load
  reloadCaptcha();