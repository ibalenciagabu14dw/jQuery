$(document).ready(function() {
	
	var reglas = {
		nombre:{required:true}
		
	};
	//Mensajes de la validación
	var mensajes = {
		nombre:{required:" Obligatorio"}
		
	}
	//FORMULARIO NUEVO PERSONAJE
	$('#formNuevo').validate({
		rules:reglas,
		messages:mensajes,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
				
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			
				var formData = $('#formNuevo').serializeArray();
				$.ajax({
					url: 'insert.php',
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
	
	//FORMULARIO BUSCAR PERSONAJE
	$('#formBuscar').validate({
		rules:reglas,
		messages:mensajes,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
				
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			
				var formData = $('#formBuscar').serializeArray();
				$.ajax({
					url: 'select.php',
					type: 'post',
					dataType: 'html',
					data: formData,
					success:function (data) {
						alert("Realizando busqueda...");
						for (var i = 0; i < data.length; i++) {
							alert(data[i].id);
							alert(data[i].nombre);
							alert(data[i].imagen);
						}
						
					}//Success
				})//Ajax
				.fail(function() {
					console.log("error");
				});//Fail
		
		},//SubmitHandler
	});//Validate
	
		//FORMULARIO MODIFICAR PERSONAJE
	$('#formModificar').validate({
		rules:reglas,
		messages:mensajes,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
				
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			
				var formData = $('#formModificar').serializeArray();
				$.ajax({
					url: 'update.php',
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
	
	
	//FORMULARIO ELIMINAR PERSONAJE
	$('#formEliminar').validate({
		rules:reglas,
		messages:mensajes,
		errorClass:"invalid",
		//Si falla la validación, mostramos errores
		invalidHandler:function (event,validator) {
			validator.showErrors();
				
		},//InvalidHandler
		//Si la validación es correcta, mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			
				var formData = $('#formEliminar').serializeArray();
				$.ajax({
					url: 'delete.php',
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