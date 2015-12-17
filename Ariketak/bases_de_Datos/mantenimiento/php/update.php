<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$id = $_POST['idbuscar'];
	$nombre = $_POST['nombreModificar'];
	$imagen = $_POST['imagenModificar'];
	
	$stmt = $pdo->prepare("UPDATE personajes SET nombre='$nombre' , imagen='$imagen' WHERE id='$id'");
	$stmt->execute();
?>