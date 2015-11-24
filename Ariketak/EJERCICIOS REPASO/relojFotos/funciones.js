	
setInterval(function(){ 

	var d = new Date();

  	//si la hora es menor de 10, ponemos el 0 por delante
	if (d.getHours()<10){
 		var hora = '0' + d.getHours();
 	} else 
 		var hora = d.getHours();


 	//si el minuto es menor de 10, ponemos el 0 por delante
 	if (d.getMinutes()<10){
 		var minuto = '0' + d.getMinutes();
 	} else 
 		var minuto = d.getMinutes();


 	//si los segundos es menor de 10, ponemos el 0 por delante
	if (d.getSeconds()<10){
 		var segundo = '0' + d.getSeconds();
 	} else 
 		var segundo = d.getSeconds();
 		
 		
 		document.getElementById("hora1").src="../img/numeros/" + hora.toString().charAt(0) + ".png";
 		document.getElementById("hora2").src="../img/numeros/" + hora.toString().charAt(1) + ".png";
 		document.getElementById("min1").src="../img/numeros/" + minuto.toString().charAt(0) + ".png";
 		document.getElementById("min2").src="../img/numeros/" + minuto.toString().charAt(1) + ".png";
 		document.getElementById("seg1").src="../img/numeros/" + segundo.toString().charAt(0) + ".png";
 		document.getElementById("seg2").src="../img/numeros/" + segundo.toString().charAt(1) + ".png";

 		document.getElementById("reloj").innerHTML= hora + ":" + minuto + ":" + segundo;

}, 1000);
