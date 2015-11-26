<?php
	$pdo = new PDO('mysql:host=localhost;dbname=ejercicios','root','');
	$statement = $pdo->query('SELECT * FROM personajes');
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>