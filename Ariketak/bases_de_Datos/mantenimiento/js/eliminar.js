$(document).ready(function() {
	
	//Reglas de validacion
	var reglasEliminar = {
		idEliminar:{required:true}
	};
	//Mensajes de la validación
	var mensajesEliminar = {
		idEliminar:{required:"Obligatorio"}
	};
	
	//FORMULARIO ELIMINAR PERSONAJE
	$('#formEliminar').validate({
		rules:reglasEliminar,
		messages:mensajesEliminar,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
				var formData = $('#formEliminar').serializeArray();
				$.ajax({
					url: 'php/delete.php',
					type: 'post',
					dataType: 'html',
					data: formData,
					success:function (data) {
							alert("Personaje eliminado");
					}//Success
				})//Ajax
				.fail(function() {
					console.log("error");
				});//Fail
		},//SubmitHandler
	});//Validate
});	//Ready