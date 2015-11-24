$(document).ready(function(){
  //EFECTO HIGHLIGHT
  $("#btnHighlight").click(function(event){
    $("#divHighlight").effect("highlight",{color: "#444444"}, 3000);
  });

  //EFECTO TWEEN
  $("#btnTween").click(function(event){
    $("#divTween").tween("background-color","#ffffff","#000000");
    
  });

  //EFECTO FX

  capaFx=new Fx.Tween("divFX",{ property:"width",duration:4000,fps:50,transition:"elastic:out"});
  $("#btnFX").click(function(event){
  	capaFx.start("30");
  }

})
