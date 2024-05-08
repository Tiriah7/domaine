<?php
// Your database connection code here
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "jacaranda";

// Establish connection
$conn = new mysqli($db_server, $db_username, $db_password, $db_name);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming 'lodging' table structure: bnb_number, lodge_name, lodge_status

// Retrieve unit ID from query parameter
$unitId = $_GET['unitId'];

// Validate unit ID (important for security)
if (in_array($unitId, [101, 202, 303, 404, 505])) {
    $query = "UPDATE lodging SET lodge_status = 'Booked' WHERE bnb_number = $unitId";

    // Execute the query and handle results
    if ($conn->query($query) === TRUE) {
        // Success response
        echo json_encode(['success' => true]);
    } else {
        // Error response
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }
} else {
    // Invalid unit ID
    echo json_encode(['success' => false, 'error' => 'Invalid unit ID']);
}

if (in_array($unitId, [101, 202, 303, 404, 505])) {
    // Fetch the logged-in user's email from the 'guest' table (assuming session handling)
    session_start(); // Initiate session if needed
    $loggedInUserEmail = $_SESSION['user_email']; // Retrieve email from session
    echo $loggedInUserEmail;
    // Fetch lodge details (error handling included)
    $query = "SELECT lodge_name, lodge_status FROM lodging WHERE bnb_number = $unitId";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $lodgeName = $row['lodge_name'];
        $lodgeStatus = $row['lodge_status'];

        // Insert booking details (using prepared statements for security)
        $stmt = $conn->prepare("INSERT INTO bookings (email, lodge_name, lodge_status, date_of_booking) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $loggedInUserEmail, $lodgeName, $lodgeStatus, date("Y-m-d")); // Use current date
        $success = $stmt->execute();

        if ($success) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to fetch lodge details']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid unit ID']);
}

// Close the connection
$conn->close();
?>
