$(document).ready(function(){
  var respuestaok = parseInt($("#lbl3").text());
  $("input").click(function(){
    if (parseInt($(this).val())==respuestaok){
    	$("#txtresp").text("RESPUESTA OK!!");
    } else $("#txtresp").text("RESPUESTA ERRONEA!!");
  });

});