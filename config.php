<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "projetoweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
