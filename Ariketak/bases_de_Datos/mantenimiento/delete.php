<?php
	//conexion
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	//recoger parametros del formulario
	$id = $_POST['idEliminar'];
	
	$stmt = $pdo->prepare("DELETE FROM personajes WHERE id = '$id'");
	$stmt->execute();
?>