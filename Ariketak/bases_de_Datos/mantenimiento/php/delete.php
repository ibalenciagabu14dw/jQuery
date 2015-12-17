<?php
	//conexion
	include 'conexion.php';
	//recoger parametros del formulario
	$id = $_POST['idEliminar'];
	
	$stmt = $pdo->prepare("DELETE FROM personajes WHERE id = '$id'");
	$stmt->execute();
?>