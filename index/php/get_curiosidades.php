<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "projetoweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT title, text1, text2, img_path FROM curiosidades";
$result = $conn->query($sql);

$curiosidades = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $curiosidades[] = $row;
    }
}

$conn->close();
echo json_encode($curiosidades);
?>
