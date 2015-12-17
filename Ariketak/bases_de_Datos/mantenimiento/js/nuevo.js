$(document).ready(function() {
	//Reglas de validacion
	var reglasNuevo = {
		nombreNuevo:{required:true},
		imagenNuevo:{required:true}
	};
	//Mensajes de la validación
	var mensajesNuevo = {
		nombreNuevo:{required:"Obligatorio"},
		imagenNuevo:{required:"Obligatorio"}
	};
	
	//FORMULARIO NUEVO PERSONAJE
	$('#formNuevo').validate({
		rules:reglasNuevo,
		messages:mensajesNuevo,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			var formData = $('#formNuevo').serializeArray();
			$.ajax({
				url: 'php/insert.php',
				type: 'post',
				dataType: 'html',
				data: formData,
				success:function (data) {
					alert("Datos insertados correctamente");
				}//Success
			})//Ajax
			.fail(function() {
				console.log("error");
			});//Fail
		},//SubmitHandler
	});//Validate
});	//Ready