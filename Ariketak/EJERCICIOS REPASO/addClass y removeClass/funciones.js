$(document).ready(function() {

	$("#12").click(function(event) {
		$("#parrafo1").removeClass();
		$("#parrafo1").addClass("parrafo12");
	});

	$("#14").click(function(event) {
		$("#parrafo1").removeClass();
		$("#parrafo1").addClass("parrafo14");
	});

	$("#16").click(function(event) {
		$("#parrafo1").removeClass();
		$("#parrafo1").addClass("parrafo16");
	});

	$("#parrafo2").mouseover(function(event) {
		$("#parrafo2").addClass('fondoGris');
	});

	$("#parrafo2").mouseout(function(event) {
		$("#parrafo2").removeClass('fondoGris');
	});

	$(document).mousemove(function(event) {
		$("#coordenadas").text(event.pageX + ", " + event.pageY);
	});

});

 var letra = document.getElementsByTagName("img");

 function cambio(alt, src, indice){
 	
 	var separar = src.split('/');

 	var foto = separar.pop();
 	
 	//para quitar la foto
 	if (foto != "vacio.gif"){
 		letra[indice].src= "../img/vacio.gif";
 	//para ponerla en el caso de la ultima I
 	}else if (alt=="i2"){
 		letra[indice].src= "../img/i.gif"
 	}else{
 		letra[indice].src= "../img/"+ alt+".gif";

 	}

 }