<?php
// Define variables and set to empty values
$fnameErr = $lnameErr = $emailErr = $phoneErr = $maleErr = $femaleErr = $dateErr = $cityErr = $localityErr = $pincodeErr = "";
$fname = $lname = $email = $phone = $male = $female = $date = $city = $locality = $pincode = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Name validation
    if (empty($_POST["fname"])) {
        $fnameErr = "Name is required";
    } else {
        $fname = test_input($_POST["fname"]);
        // Check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/", $fname)) {
            $fnameErr = "Only letters and white space allowed";
        }
    }

    // Email validation
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        // Check if email address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    // Phone number validation
    if (empty($_POST["phone"])) {
        $phoneErr = "Phone number is required";
    } else {
        $phone = test_input($_POST["phone"]);
        // Check if phone number is valid
        if (!preg_match("/^\d{10}$/", $phone)) {
            $phoneErr = "Invalid phone number";
        }
    }

    // Username validation
    if (empty($_POST["username"])) {
        $usernameErr = "Username is required";
    } else {
        $username = test_input($_POST["username"]);
        // Check if username only contains letters
        if (!preg_match("/^[a-zA-Z]+$/", $username)) {
            $usernameErr = "Only letters allowed in username";
        }
    }
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Form Validation</title>
    <style>
    .error {
        color: red;
    }
    </style>
</head>

<body>

    <h2>PHP Form Validation</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">Name:</label>
        <input type="text" id="fname" name="name">
        <span class="error"><?php echo $fnameErr; ?></span>



        <input type="submit" value="Submit">
    </form>

</body>

</html>