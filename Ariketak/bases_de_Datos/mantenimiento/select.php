<?php
	//conexion
	include 'conexion.php';
	
	$id = $_POST['idBuscar'];
	$stmt = $pdo->query("SELECT * FROM personajes WHERE id = '$id'");
	$result=$stmt ->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>