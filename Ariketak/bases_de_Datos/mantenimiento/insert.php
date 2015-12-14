<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$nombre = $_POST['nombre'];
	$imagen = $_POST['imagen'];
	
	$stmt = $pdo->prepare("INSERT INTO personajes(nombre,imagen) 
						   VALUES ('$nombre','$imagen')");
	$stmt->execute();
?>