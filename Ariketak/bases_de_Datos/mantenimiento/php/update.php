<?php
	//conexion
	include 'conexion.php';
	//recoger parametros del formulario
	$id = $_POST['idModificar'];
	$nombre = $_POST['nombreModificar'];
	$imagen = $_POST['imagenModificar'];
	
	$stmt = $pdo->prepare("UPDATE personajes SET nombre='$nombre' , imagen='$imagen' WHERE id='$id'");
	$stmt->execute();
?>