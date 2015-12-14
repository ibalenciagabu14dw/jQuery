<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$nombre = $_POST['nombreEliminar'];
	
	$stmt = $pdo->prepare("DELETE FROM personajes WHERE nombre = '$nombre'");
	$stmt->execute();
?>