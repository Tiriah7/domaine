<?php
// Include your database connection code here
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "jacaranda";

// Create a database connection
$conn = new mysqli($db_server, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the registration form
    $new_email = $_POST["new_email"];
    if (!filter_var($new_email, FILTER_VALIDATE_EMAIL)) {
        console.log("Enter a valid email address!");
    }
    $new_email = htmlspecialchars($new_email); // Sanitize for HTML output
    $new_password = $_POST["new_password"];
    if (strlen($new_password) >= 8) {

    // Hash the password (for security)
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);


    // Insert the new user into the database (assuming a "users" table)
    $sql = "INSERT INTO guest (email, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $new_email, $hashed_password);
  
    if ($stmt->execute()) {
        // Registration successful, redirect the user to login popup embedded in index.html
       header("Location: index.html#LoginPopup");
    } else {
        // Registration failed, handle the error (e.g., username already taken)
        echo "Registration failed: " . $stmt->error;
    }

    // Close the statement and database connection
    $stmt->close();
    $conn->close();
}else {
    echo "Password must be at least 8 characters";
}
}
?>
