<?php

$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "jacaranda";

// Create a database connection
$conn = new mysqli($db_server, $db_username, $db_password, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    
// Fetch the status from the database
$bnb_number = $_GET['bnb_number']; // You should validate and sanitize this input
$sql = "SELECT lodge_status FROM lodging WHERE bnb_number = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $bnb_number);
$stmt->execute();
$stmt->bind_result($lodge_status);
$stmt->fetch();
$stmt->close();

// Close the database connection
$conn->close();

// Return the status to the JavaScript
echo $lodge_status;
}
?>
