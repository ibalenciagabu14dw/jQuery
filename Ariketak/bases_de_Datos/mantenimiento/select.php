<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$edad = $_POST['edad'];
	$edadInt = intval($edad);
	$dni = $_POST['dni'];
	$email = $_POST['email'];
	$provincia = $_POST['provincias'];
	$fecha = $_POST['fecha'];
	$telefono = $_POST['telefono'];
	$hora = $_POST['hora'];
	
	$stmt = $pdo->prepare("INSERT INTO personas(nombre,apellido,edad,dni,email,provincia,fecha,telefono,hora) 
						   VALUES ('$nombre','$apellido',$edadInt,'$dni','$email','$provincia','$fecha','$telefono','$hora')");
	$stmt->execute();
?>