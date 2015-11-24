$(function() {
    $("#acordeon").accordion({
    	event: "mouseover",
    	collapsible: true
    });

    $("#cuadrado1").draggable({
    	containment: "#contenedor1",
    	delay: 1000,
    	stop: function(evento, ui){
    		alert("has soltado el cuadrado");
    	}
    });

    $("#cuadrado2").draggable({
    	containment: "#contenedor2",
    	distance: 50
    });
});

