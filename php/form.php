<?php
$fnameErr = $lnameErr = $emailErr = $phoneErr = $maleErr = $femaleErr = $dateErr = $cityErr = $localityErr = $pincodeErr = "";
$fname = $lname = $email = $phone = $male = $female = $date = $city = $locality = $pincode = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Name validation
    if (empty($_POST["fname"])) {
        $fnameErr = "Name is required";
    } else {
      
    }
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Anekal";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 // Taking all 5 values from the form data(input)
 $fname =  $_REQUEST['fname'];
 $lname = $_REQUEST['lname'];
 $email =  $_REQUEST['email'];
 $phone = $_REQUEST['phone'];
 $gender = $_REQUEST['gender'];
 $date = $_REQUEST['dob'];
 $city =  $_REQUEST['city'];
 $locality = $_REQUEST['locality'];
 $pincode = $_REQUEST['pincode'];

 
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gender = isset($_POST['gender']) ? $_POST['gender'] : '';

    $sql = "INSERT INTO customer (Gender) VALUES ('$gender')";
 }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation code here (similar to previous example)

    // If validation passes, insert into database
    if (empty($nameErr) && empty($emailErr) && empty($phoneErr) && empty($usernameErr)) {
        $sql = "INSERT INTO customer (Username, Lastname, Email, Phone, Gender, DOB, City, Locality, Pincode) VALUES ('$fname','$lname', '$email', '$phone', '$gender','$date', '$city', '$locality', '$pincode')";

        if ($conn->query($sql) === TRUE) {
            header("Location: sucess.html");        
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
/*
if (isset($_POST['captcha']) && $_POST['captcha'] == $_SESSION['captcha_sum']) {
    // CAPTCHA is valid
    echo "CAPTCHA validation successful. Process the form.";
    // Add your form processing logic here
} else {
    // CAPTCHA is not valid
    echo "CAPTCHA validation failed. Please try again.";
}*/

$conn->close();
?>

<!-- HTML form code (similar to previous example) -->