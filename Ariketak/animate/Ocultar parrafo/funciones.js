$(document).ready(function(){
   $("#btnOcultar").click(function(event){
      $("#parrafo").animate({
         height: "toggle"
         }, 2000
      );
   });
   
})
