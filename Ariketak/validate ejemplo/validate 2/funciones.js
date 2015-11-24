$(function(){

	/* Incluimos un método para validar el campo nombre */
		jQuery.validator.addMethod("nombre", function(value, element) {
		return this.optional(element) || /^[a-záéóóúàèìòùäëïöüñ\s]+$/i.test(value);
		});

	/* Capturar el click del botón */
		$("#btn").on("click", function(){

		/* Validar el formulario */
		$("#formulario").validate({
			rules:{/* Accedemos a los campos a través de su nombre:*/ 
				email: {required: true, email: true, minlength: 5, maxlength: 80},
	            nombre: {required: true, nombre: true, minlength: 2, maxlength: 50},
	            edad: {required: true, digits: true, minlength: 1, maxlength: 3}
            },
            messages:{ /* Accedemos a los campos a través de su nombre:*/
	            email:{
	            	required: 'El campo es requerido',
	            	email: 'El formato de email es incorrecto',
	            	minlength: 'El minimo permitido son 5 caracteres',
	            	maxlength: 'El maximo permitido son 80 caracteres'
	            },
	            nombre:{
					required: 'El campo es requerido',
					nombre: 'Sólo letras',
					minlength: 'El minimo permitido son 2 caracteres',
					maxlength: 'El maximo permitido son 50 caracteres'
				},
	            edad:{
					required: 'El campo es requerido',
					digits: 'Sólo dígitos',
					minlength: 'El minimo permitido son 1 caracteres',
					maxlength: 'El maximo permitido son 3 caracteres'
				}
			}
        });
   });
 
});