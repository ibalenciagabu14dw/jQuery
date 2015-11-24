$(document).ready(function() {

  $("#btnPlay").click(function(event) {
    //mostramos el div
    $("#cuadrado").slideDown('slow', function(){

      //lo movemos hacia la izquierda
      $("#cuadrado").animate({
        left : 100,
        backgroundColor: 'blue'
        }, 4000, function(){
          //escondemos el div
          $("#cuadrado").slideUp('slow');  
         });    
      });
    
  });


  $("#btnStop").click(function(event) {
   $("#cuadrado").stop();
  });

});