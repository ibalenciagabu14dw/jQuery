$(document).ready(function(){
	
	//Añadir un numero al text clave al teclear un numero de la clave
	var claveTotal ="";
	$('button').click(function(event) {
		var valor = $(this).val();
		claveTotal += valor;
		$("#clave").val(claveTotal);
		return false;
	});

	//Incluimos un método para validar el campo DNI
	jQuery.validator.addMethod("dni", function(value, element) {
	return this.optional(element) || /(\d{8})([-]?)([A-Z]{1})/i.test(value);
	});

	/* Validar el formulario */
	var reglas = {/* Accedemos a los campos a través de su nombre:*/ 
			nombre: {required: true, maxlength: 30},
			dni: {required: true, dni: true},
			visa: {required: true, digits: true, minlength: 20, maxlength: 20},
			clave:{required: true, minlength: 4, maxlength: 4},				
        };
    
    var mensajes = { /* Accedemos a los campos a través de su nombre:*/
        	nombre:{required: ' El campo es requerido', maxlength: ' El maximo permitido son 30 caracteres'},
			dni:{required: ' El campo es requerido', dni: 'El DNI tiene que ser valido'},
			visa:{required: ' El campo es requerido',digits: 'deben de ser solo numeros',minlength: ' Deben de ser 20 numeros',maxlength: ' Deben de ser 20 numeros'},
			clave:{required: ' El campo es requerido',minlength: ' Deben de ser 4 numeros',maxlength: ' Deben de ser 4 numeros'},
		};
		
	//validate function
	$('#formulario').validate ({
		rules:reglas,
		messages:mensajes
	});
   
   	/*MOSTRAR DATOS EN LA MISMA PAGINA SI EL FORMULARIO SE HA VALIDADO CORRECTAMENTE
	$("#formulario").submit(function(event) {
		if($("#formulario").valid()){
			document.getElementById("respuestas").innerHTML = "nombre: " + $('#nombre').val() + "<br>" +
	    													"tipo de pago: "+ $('#pago').val() + "<br>" +
	    													"dni: " + $('#dni').val()+ "<br>" +
	    													"visa: " + $('#visa').val() + "<br>" +
	    													"clave: " + $('#clave').val();
    		return false;
    	}
	});*/
	
	//al validar formulario pasamos mediante cookies los datos a otra pagina
	$('#formulario').submit(function(event) {
		$.cookie('nombre', $('#nombre').val());
		$.cookie('pago',$('#pago').val());
		$.cookie('dni',$('#dni').val());
		$.cookie('visa',$('#visa').val());
		$.cookie('clave',$('#clave').val());
		window.location.href="ariketa2_resul.html";
		return false;
	});
	
	//mostrar el resultado en ariketa2_resul al pulsar el boton de mostrar de esa misma pagina
	$('#mostrar').click(function(event) {
		$('#resultado').html("Nombre: "+$.cookie('nombre')+"<br>pago: "+$.cookie('pago')+"<br>DNI: "+$.cookie('dni')+
		"<br>Visa: "+$.cookie('visa')+"<br>Clave: "+$.cookie('clave'));
	});
});