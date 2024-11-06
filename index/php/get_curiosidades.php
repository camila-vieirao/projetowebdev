<?php
include '../../config.php';

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
