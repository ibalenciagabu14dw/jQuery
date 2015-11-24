$(document).ready(function(){
  $("#btnMostrar").click(function(event){
    $("#p1").slideDown();
    $("#p2").slideDown(1000);
    $("#p3").slideDown(2000);
  });

  $("#btnOcultar").click(function(event){
    $("#p1").slideUp();
    $("#p2").slideUp(1000);
    $("#p3").slideUp(2000);
  });
      	
  $("#btnAlternar").click(function(event){
    $("#p1").slideToggle();
    $("#p2").slideToggle(1000);
    $("#p3").slideToggle(2000);
  });   
})
