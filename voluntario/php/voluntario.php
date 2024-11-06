<?php
include '../../config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = mysqli_real_escape_string($conn, $_POST['nome']);
    $telefone = mysqli_real_escape_string($conn, $_POST['telefone']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $setor = mysqli_real_escape_string($conn, $_POST['setor']);
    $motivacao = mysqli_real_escape_string($conn, $_POST['motivacao']);

    $curriculo_name = $_FILES['curriculo']['name'];
    $curriculo_tmp = $_FILES['curriculo']['tmp_name'];
    $curriculo_folder = '../../uploads/' . $curriculo_name;

    if (move_uploaded_file($curriculo_tmp, $curriculo_folder)) {
        $curriculo_path = 'uploads/' . $curriculo_name;

        $sql = "INSERT INTO voluntarios (nome, telefone, email, setor, motivacao, curriculo) VALUES ('$nome', '$telefone', '$email', '$setor', '$motivacao', '$curriculo_path')";

        if ($conn->query($sql) === TRUE) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao cadastrar: " . $conn->error;
        }
    } else {
        echo "Erro ao fazer upload do currículo.";
    }

    $conn->close();
}
?>
