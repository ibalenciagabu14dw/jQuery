$(function(){

	/* Capturar el click del botón */
		$("#btn").on("click", function(){

		/* Validar el formulario */
		$("#formulario").validate({
			rules:{/* Accedemos a los campos a través de su nombre:*/ 
				nombre: {required: true, minlength: 2, maxlength: 50},
				apellidos: {required: true, minlength: 2, maxlength: 50},
				nif: {minlength: 9, maxlength: 9},
				postal: {required: true, digits: true, minlength: 5, maxlength: 5},
				email: {required: true, email: true, minlength: 5, maxlength: 80},
            },
            messages:{ /* Accedemos a los campos a través de su nombre:*/
	            nombre:{
					required: ' El campo es requerido',
					minlength: ' El minimo permitido son 2 caracteres',
					maxlength: ' El maximo permitido son 50 caracteres'
				},
				apellidos:{
					required: ' El campo es requerido',
					minlength: ' El minimo permitido son 2 caracteres',
					maxlength: ' El maximo permitido son 50 caracteres'
				},
				nif:{
					minlength: ' Hay que introducir 9 caracteres'
				},
				postal:{
					required: ' El campo es requerido',
					minlength: ' Hay que introducir 5 numeros'
				},
				email:{
	            	required: ' El campo es requerido',
	            	email: ' El formato de email es incorrecto',
	            	minlength: ' El minimo permitido son 5 caracteres',
	            	maxlength: ' El maximo permitido son 80 caracteres'
	            },
			}
        });
   });
 
});