var foto = [
    "../img/0.ico",
    "../img/1.ico",
    "../img/2.ico",
    "../img/3.ico",
    "../img/4.ico",
    "../img/5.ico",
    "../img/6.ico"
	];
var indice=0;
function anterior (){
	if(indice==0){
		document.getElementById("galeria").src= foto[6];	
		indice=6;
	}else {
		document.getElementById("galeria").src= foto[indice-1];
		indice=indice-1;
	} 	
}

function siguiente (){
	if(indice==6){
		document.getElementById("galeria").src= foto[0];	
		indice=0;
	}else {
		document.getElementById("galeria").src= foto[indice+1];
		indice=indice+1;
	}
}