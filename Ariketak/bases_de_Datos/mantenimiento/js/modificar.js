$(document).ready(function() {
	
	//Reglas de validacion
	var reglasModificar = {
		idModificar:{required:true}
	};
	//Mensajes de la validación
	var mensajesModificar = {
		idModificar:{required:"Obligatorio"}
	};
	
	//FORMULARIO MODIFICAR PERSONAJE BOTON BUSCAR
	$('#submitBuscar').click(function(){
		alert("ok");
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
					url: 'php/selectUpdate.php',
					type: 'post',
					dataType: 'json',
					data: formData,
					success:function (data) {
						var resp = "";
						for (var i = 0; i < data.length; i++) {
							$('#nombreModificar').attr('value',data[i].nombre);
							$('#imagenModificar').attr('value',data[i].imagen);
							
							$('#idModificar').attr('disabled',true);
							$('#nombreModificar').attr('disabled',false);
							$('#imagenModificar').attr('disabled',false);
							
							$('#submitModificar').attr('hidden',false);
						};
					}
				})//ajax
				.fail(function() {
					console.log("error");
				});//Fail
			},//SubmitHandler
		});//Validate
	});
	
	//FORMULARIO MODIFICAR PERSONAJE BOTON MODIFICAR
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
						dataType: 'html',
						data: formData,
						success:function (data) {
								alert("Personaje Modificado");
						}//Success
					})//Ajax
					.fail(function() {
						console.log("error");
					});//Fail
			},//SubmitHandler
		});//Validate
	});

});	//Ready