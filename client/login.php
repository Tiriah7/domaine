<?php
session_start(); // Start the session at the beginning
$userLoggedIn = isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true;



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
    $email = $_POST['email'];
    $password = $_POST['password'];


    // Validate the user's credentials using prepared statements
    $sql = "SELECT * FROM guest WHERE email = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
    
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
    
            // Verify the hashed password
            if (password_verify($password, $row['password'])) {
                // Authentication successful
               if( $_SESSION['user_logged_in'] = true){
                header("Location: index.html");}
                // echo "Logged in";}
                exit; // Ensure script stops after the redirection
            } else {
                // Authentication failed
                echo "Invalid email or password.";
            }
        } else {
            // Authentication failed
            echo "Invalid email or password.";
        }
    }else {
    // Error in executing the prepared statement
    echo "Error: " . $stmt->error;
}
}
// Log out the user
unset($_SESSION['user_logged_in']); // Unset the session variable
session_destroy(); // Destroy the session
?>
<script>
    const userLoggedIn = <?php echo $userLoggedIn ? 'true' : 'false'; ?>;
</script>

