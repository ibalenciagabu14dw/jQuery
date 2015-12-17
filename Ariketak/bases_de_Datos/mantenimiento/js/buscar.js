$(document).ready(function() {
	
	//Reglas de validacion
	var reglasBuscar = {
		idBuscar:{required:true}
	};
	//Mensajes de la validación
	var mensajesBuscar = {
		idBuscar:{required:"Obligatorio"}
	};
	
	
	//FORMULARIO BUSCAR PERSONAJE
	$('#formBuscar').validate({
		rules:reglasBuscar,
		messages:mensajesBuscar,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			var formData = $('#formBuscar').serializeArray();
			$.ajax({
				url: 'php/select.php',
				type: 'post',
				dataType: 'json',
				data: formData,
				success:function (data) {
					var resp = "";
					for (var i = 0; i < data.length; i++) {
						$('#nombreBuscar').attr('value',data[i].nombre);
						$('#nombreBuscar').attr('disabled','true');
						$('#imagenBuscar').attr('src',data[i].imagen);
					};
				}
			})//ajax
			.fail(function() {
				console.log("error");
			});//Fail
		},//SubmitHandler
	});//Validate
});	//Ready