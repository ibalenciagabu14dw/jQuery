$(function(){

	/* Capturar el click del botón */
	$("#btn").on("click", function(){

		/* Validar el formulario */
		$("#formulario").validate({
			rules:{/* Accedemos a los campos a través de su nombre:*/ 
				texto: {
					required: true, 
					minlength: 2, 
					maxlength: 10
				},
				textarea: {
					required: true, 
					minlength: 2, 
					maxlength: 50
				},
				//radio: {required: true:},
				chkaceptado: {
					required: true
				},
				chkleido: {
					required: true
				},
            },
            messages:{ /* Accedemos a los campos a través de su nombre:*/
	            texto:{
					required: ' El campo es requerido',
					minlength: ' El minimo permitido son 2 caracteres',
					maxlength: ' El maximo permitido son 10 caracteres'
				},
				textarea:{
					required: ' El campo es requerido',
					minlength: ' El minimo permitido son 2 caracteres',
					maxlength: ' El maximo permitido son 50 caracteres'
				},
				/*radio:{
					required: ' El campo es requerido'
				},*/
				chkaceptado:{
					required: ' El campo es requerido'
				},
				chkleido:{
	            	required: ' El campo es requerido'
	            },
			}
        });

        document.getElementById("respuestas").innerHTML = "texto: " + $('#texto').val() + "<br>" +
        												"textarea: "+ $('#textarea').val() + "<br>" +
        												"radio: " + $('#radio').val()+ "<br>" +
        												"Aceptado: " + $("chkaceptado").val() + "<br>" +
        												"leido: " + $("chkleido").val() + "<br>" +
        												"select: " + $("select").val();

        return false;
   });
 
});