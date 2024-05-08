<?php
session_start();

$response = [];

if (isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true) {
    $response['userLoggedIn'] = true;
} else {
    $response['userLoggedIn'] = false;
}

header('Content-Type: application/json');
echo json_encode($response);
