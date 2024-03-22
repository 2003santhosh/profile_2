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

$name = $_POST['name'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$father = $_POST['father'];
$mother = $_POST['mother'];
$income = $_POST['income'];
$github = $_POST['github'];
$linkedin = $_POST['linkedin'];

$sql = "UPDATE users SET name='$name', age='$age', dob='$dob', contact='$contact', address='$address', father='$father', mother='$mother', income='$income', github='$github', linkedin='$linkedin' WHERE user_id='$user_id'";

if (mysqli_query($conn, $sql)) {
    echo "Profile updated successfully";
} else {
    echo "Error updating profile: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
