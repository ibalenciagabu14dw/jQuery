$(document).ready(function(){
   $("#btnOpacidad").click(function(event){
    	$("#div1").fadeOut(function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 2000)
      	});

      	$("#div2").fadeOut('slow', function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 2000)
      	});

      	$("#div3").fadeOut('3000', function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 2000)
      	});
    });
        
})
