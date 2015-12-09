$(document).ready(function() {
	//definir variable moneda
	var moneda = "";

	//si la cookie no esta definida dar valor "dolar" a moneda
	if ($.cookie('divisa') == undefined) {
		moneda = "dolar";
	}else{
		//si la cookie esta definida dar el valor de la cookie a moneda
		moneda = $.cookie('divisa');
	}
	
	//llamar a la funcion para crear la tabla con los datos
	leerDatos();

	//Al ejecutar el formulario darle valor a la cookie y a la moneda
	$('#form').submit(function(event) {
		event.preventDefault();
		var valor = $('#moneda').val();
		if (valor != null) {
			$.cookie('divisa',valor,{ expires: 10 });
			moneda = $.cookie('divisa');
		};
		leerDatos();		
	});

	function leerDatos () {
		$.ajax({
		url: 'datos.php',
		type: 'post',
		dataType: 'json',
	
		success: function (data) {
			
			//CREAMOS LA TABLA CON LOS DATOS
			//cabecera de la tabla
			var resp = "<thead><tr><th>Descripción</th><th>Precio</th></tr></thead><tbody>";
			
			//cada registro de la tabla lo guardamos en resp
			for (var i = 0;i<data.length; i++) {
				resp += "<tr><td>";
				resp += data[i].descripcion+"</td><td>";
				if (moneda == "dolar") {
					resp += data[i].dolares+" $</td></tr>";
				}else if (moneda == "euro") {
					resp += data[i].euros+" €</td></tr>";
				}else if (moneda == "libra") {
					resp += data[i].libras+" &#163;</td></tr>";
				};
			};
			resp += "</tbody>";
			
			//mostramos la tabla
			$('#tabla').html(resp);
		}
		});
	}//function
});