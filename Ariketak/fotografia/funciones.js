$(document).ready(function(){
  $("#btnOcultar").click(function(event){
    $("#imgPostal").hide('slow');
    $("#btnOcultar").hide('fast');
    $("#btnMostrar").show('fast');
  });

  $("#btnMostrar").click(function(event){
  	$("#imgPostal").show('slow');
    $("#btnOcultar").show('fast');
    $("#btnMostrar").hide('fast');
  });

});