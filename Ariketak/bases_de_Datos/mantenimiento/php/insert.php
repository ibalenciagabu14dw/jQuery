<?php
	//conexion
	include 'conexion.php';
	//recoger parametros del formulario
	$nombre = $_POST['nombreNuevo'];
	$imagen = $_POST['imagenNuevo'];
	
	$stmt = $pdo->prepare("INSERT INTO personajes(nombre,imagen) 
						   VALUES ('$nombre','$imagen')");
	$stmt->execute();
?>