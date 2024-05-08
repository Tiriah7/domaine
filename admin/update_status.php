<?php
// Check for POST request

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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the bnb_number from the POST data
    $bnb_number = $_POST["bnb_number"];


    // Query the database to get the current status
    $sql = "SELECT lodge_status FROM lodging WHERE bnb_number = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $bnb_number);
    $stmt->execute();
    $stmt->bind_result($lodge_status);
    $stmt->fetch();
    $stmt->close();

    // Toggle the status and update the database
    $new_status = ($lodge_status === "Available") ? "Booked" : "Available";
    $update_sql = "UPDATE lodging SET lodge_status = ? WHERE bnb_number = ?";
    $update_stmt = $conn->prepare($update_sql);
    $update_stmt->bind_param("ss", $new_status, $bnb_number);
    $update_stmt->execute();
    $update_stmt->close();

    // Close the database connection
    $conn->close();
    
    // Return the new status as a response
    echo $new_status;
}