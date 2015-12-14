<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$id = $_POST['idBuscar'];
	
	$stmt = $pdo->prepare("SELECT id, nombre, imagen FROM personajes WHERE id = '$id'");
	$stmt->execute();
?>