var reglas = {  
	nombre: {required:true},  
	edad: {required:true, digits:true, min:1, max:150},  
	sueldo: {required:true, number:true,},  
	email:{required: true, email:true},  
};  

var mensajes = {  
	nombre: {required:"Nombre Requerido"},  
	edad:{required:"Edad Requerida", digits:"Campo edad acepta solo numeros enteros",  
	min:"Edad minima 1" , max:"Edad maxima 150"},  
	sueldo:{required:"Sueldo Requerido", number:"Campo acepta solo numeros reales"},  
	email:{required:"Email Requerido", email:"Formato de Email incorrecto"},  
};  
	  
$(document).ready (function(){  
	$("#idNombreForm").validate ({  
		rules:reglas,  
		messages:mensajes  
	});  
});  
