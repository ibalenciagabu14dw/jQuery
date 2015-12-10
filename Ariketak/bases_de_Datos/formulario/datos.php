<?php
	include 'conexion.php';
	$statement = $pdo->query('SELECT * FROM personas');
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>