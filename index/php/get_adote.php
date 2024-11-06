<?php
include '../../config.php';

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
