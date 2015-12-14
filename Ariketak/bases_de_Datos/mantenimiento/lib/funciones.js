$(document).ready(function() {
				var formData = $('#form').serializeArray();
				$.ajax({
					url: 'insert.php',
					type: 'post',
					dataType: 'html',
					data: formData,
					success:function (data) {
						alert("Datos insertados correctamente");	
					}//Success
				})//Ajax
				.fail(function() {
					console.log("error");
				});//Fail
	
	
});	//Ready