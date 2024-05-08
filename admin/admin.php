<?php
// Replace these with your actual database credentials
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

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

// Validate the user's credentials using prepared statements
$sql = "SELECT * FROM admin WHERE username = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        
        // Verify the hashed password
        if (password_verify($password, $row['password'])) {
            // Authentication successful
            session_start();
            header("Location: admin.html");
        } else {
            // Authentication failed
            echo "Invalid username or password.";
        }
    } else {
        // Authentication failed
        echo "Invalid username or password.";
    }
} else {
    // Error in executing the prepared statement
    echo "Error: " . $stmt->error;
}
}

