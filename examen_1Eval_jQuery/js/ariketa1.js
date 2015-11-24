$(document).ready(function() {

	var izquierdaInicio = $("#img1").attr('src');	
	var centroInicio = $("#img2").attr('src');
	var derechaInicio = $("#img3").attr('src');

	$("#cambio1").click(function(event) {
		var izq = $("#img1").attr('src');
		var der = $("#img3").attr('src');
		$("#img1").attr('src', der);
		$("#img3").attr('src', izq);
		
	});

	$("#cambio2").click(function(event) {
		var izq = $("#img1").attr('src');
		var der = $("#img3").attr('src');
		$("#img1").attr('src', der);
		$("#img3").attr('src', izq);
		
	});

	$("#cambio3").click(function(event) {
		$("#img3").attr('src', 'imagenes/Blanco.jpg');
		
	});

	$("#cambio4").click(function(event) {
		$("#img1").attr('src', 'imagenes/Blanco.jpg');
		
	});

	$("#cambio5").click(function(event) {
		$("#img1").attr('src', 'imagenes/Blanco.jpg');
		$("#img3").attr('src', 'imagenes/Blanco.jpg');
		
	});

	$("#cambio6").click(function(event) {
		
		$("#img2").attr('src', izquierdaInicio);
		$("#img3").attr('src', izquierdaInicio);
		
	});

	$("#cambio7").click(function(event) {
		$("#img1").attr('src', derechaInicio);
		$("#img2").attr('src', derechaInicio);
		
	});

	$("#cambio8").click(function(event) {
		$("#img1").attr('src', izquierdaInicio);
		$("#img2").attr('src', centroInicio);
		$("#img3").attr('src', derechaInicio);
	});
});