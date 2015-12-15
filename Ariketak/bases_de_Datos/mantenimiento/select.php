<?php
	//conexion
	include 'conexion.php';
	
	$id = $_POST['idBuscar'];
	$stmt = $pdo->query("SELECT id,nombre,imagen FROM personajes WHERE id LIKE '$id'");
	$result=$stmt ->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>