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
	
	//Reglas de validacion
	var reglasBuscar = {
		idBuscar:{required:true}
	};
	//Mensajes de la validación
	var mensajesBuscar = {
		idBuscar:{required:"Obligatorio"}
	};
	
	//Reglas de validacion
	var reglasModificar = {
		idModificar:{required:true},
		nombreModificar:{required:true},
		imagenModificar:{required:true}
	};
	//Mensajes de la validación
	var mensajesModificar = {
		idModificar:{required:"Obligatorio"},
		nombreModificar:{required:"Obligatorio"},
		imagenModificar:{required:"Obligatorio"}
	};
	
	//Reglas de validacion
	var reglasEliminar = {
		idEliminar:{required:true}
	};
	//Mensajes de la validación
	var mensajesEliminar = {
		idEliminar:{required:"Obligatorio"}
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
		url: 'datos.php',
		type: 'post',
		dataType: 'json',
	
		success: function (data) {
			var resp = "";
			for (var i = 0;i<data.length; i++) {
				resp += data[i].id;
				resp += data[i].nombre;
				resp += data[i].imagen;
				};
			
			$('#resultado').html(resp);
		}
	});//Validate
	
		//FORMULARIO MODIFICAR PERSONAJE
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