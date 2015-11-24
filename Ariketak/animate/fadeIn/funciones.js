$(document).ready(function(){
   $("#btnOpacidad").click(function(event){
    	$("#div1").fadeIn(function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 1000)
      	});

      	$("#div2").fadeIn('slow', function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 2000)
      	});

      	$("#div3").fadeIn('3000', function() {
      		$(this).animate({
      		   opacity: 0.5
      		}, 3000)
      	});
    });
        
})
