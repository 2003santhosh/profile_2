<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "your_database";
$conn = "";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: profile.html"); 
    exit();
} else {
    echo "Invalid email or password";
}

mysqli_close($conn);
?>
