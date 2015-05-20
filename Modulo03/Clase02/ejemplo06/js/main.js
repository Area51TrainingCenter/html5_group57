$(function(){

	$("#btnEnviar").click(function(event){

		event.preventDefault();
		var nombre=$("#nombre").val();
		var pass=$("#pass").val();
		if(nombre=="juan" && pass=="123")
		{
			$("#resultado").text("Bienvenido Juan Carlos");
		}
		else
		{
			$("#resultado").text("no eres un usuario registrado");
		}
		
	})
	
})