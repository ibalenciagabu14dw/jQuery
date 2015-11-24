function cogerAno(){
	
	var d = new Date();
  	var ano = d.getFullYear();	
 		
 		document.getElementById("num1").src="../img/numeros/" + ano.toString().charAt(0) + ".png";
 		document.getElementById("num2").src="../img/numeros/" + ano.toString().charAt(1) + ".png";
 		document.getElementById("num3").src="../img/numeros/" + ano.toString().charAt(2) + ".png";
 		document.getElementById("num4").src="../img/numeros/" + ano.toString().charAt(3) + ".png";
}

function suma(){
	document.getElementById("contador").innerHTML = parseInt(document.getElementById("contador").innerHTML) + 5;
}

function reset(){
	document.getElementById("contador").innerHTML = 5;
}