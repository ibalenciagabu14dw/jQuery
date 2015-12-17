$(document).ready(function() {
	
	//Reglas de validacion Buscar
	var reglasBuscar = {
		idModificar:{required:true}
	};
	//Mensajes de la validación Buscar
	var mensajesBuscar = {
		idModificar:{required:"Obligatorio"}
	};
	
/*	//Reglas de validacion Modificar
	var reglasModificar = {
		nombreModificar:{required:true},
		imagenModificar:{required:true}
	};
	//Mensajes de la validación Modificar
	var mensajesModificar = {
		nombreModificar:{required:"Obligatorio"},
		imagenModificar:{required:"Obligatorio"}
	};*/
	
	//FORMULARIO MODIFICAR PERSONAJE BOTON BUSCAR
	$('#submitBuscar').click(function(){
		$('#formModificar').validate({
			rules:reglasBuscar,
			messages:mensajesBuscar,
			errorClass:"invalid",
			//Si falla la validación, mostramos errores
			invalidHandler:function (event,validator) {
				validator.showErrors();
			},//InvalidHandler
			//Si la validación es correcta, mandamos los datos del formulario para insertar
			submitHandler:function (form) {
				var formData = $('#formModificar').serializeArray();
				$.ajax({
					url: 'php/selectUpdate.php',
					type: 'post',
					dataType: 'json',
					data: formData,
					success:function (data) {
						for (var i = 0; i < data.length; i++) {
							$('#nombreModificar').attr('value',data[i].nombre);
							$('#imagenModificar').attr('value',data[i].imagen);
							
							//$('#idModificar').attr('disabled',true);
							$('#nombreModificar').attr('disabled',false);
							$('#imagenModificar').attr('disabled',false);
							
							$('#submitModificar').prop('disabled', false);
						};
					}
				})//ajax
				.fail(function() {
					console.log("error");
				});//Fail
			},//SubmitHandler
		});//Validate
	});
	
	/*//FORMULARIO MODIFICAR PERSONAJE BOTON MODIFICAR
	$('#submitModificar').click(function(){
		$('#formModificar').validate({
			rules:reglasModificar,
			messages:mensajesModificar,
			errorClass:"invalid",
			//Si falla la validación, mostramos errores
			invalidHandler:function (event,validator) {
				validator.showErrors();
			},//InvalidHandler
			//Si la validación es correcta, mandamos los datos del formulario para insertar
			submitHandler:function (form) {
				var formData = $('#formModificar').serializeArray();
				$.ajax({
					url: 'php/update.php',
					type: 'post',
					dataType: 'json',
					data: formData,
					success:function (data) {
						alert("hecho");
					}
				})//ajax
				.fail(function() {
					console.log("error");
				});//Fail
			},//SubmitHandler
		});//Validate
	});*/
	
	//FORMULARIO MODIFICAR PERSONAJE BOTON MODIFICAR
	$('#submitModificar').click(function(){
		var formData = $('#formModificar').serializeArray();
		$.ajax({
			url: 'php/update.php',
			type: 'post',
			dataType: 'html',
			data: formData,
			success:function (data) {
				alert("hecho");
			}
		})//ajax
		.fail(function() {
			console.log("error");
		});//Fail
	});
});	//Ready