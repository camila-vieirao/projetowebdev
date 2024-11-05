<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "1234", "projetoweb");

if ($conn->connect_error) {
    die(json_encode(["error" => "Falha na conexão: " . $conn->connect_error]));
}

$result = $conn->query("SELECT * FROM adote");

$adoteData = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $adoteData[] = $row;
    }
}

echo json_encode($adoteData);

$conn->close();
?>
