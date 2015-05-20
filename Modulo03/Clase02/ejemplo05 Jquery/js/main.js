$(function(){


$("#op-inicio").on("click",function(){
	$("#bloque-inicio").removeClass("show");
	$("#bloque-deportes").removeClass("show");
	$("#bloque-espectaculos").removeClass("show");
	$("#bloque-entretenimiento").removeClass("show");
	$("#bloque-inicio").addClass("show");

	$("#op-deportes").removeClass("activo")
	$("#op-espectaculos").removeClass("activo")
	$("#op-entretenimiento").removeClass("activo")
	$("#op-inicio").removeClass("activo")
	$("#op-inicio").addClass("activo")

})

$("#op-deportes").on("click",function(){
	$("#bloque-inicio").removeClass("show");
	$("#bloque-deportes").removeClass("show");
	$("#bloque-espectaculos").removeClass("show");
	$("#bloque-entretenimiento").removeClass("show");
$("#bloque-deportes").addClass("show");


	$("#op-deportes").removeClass("activo")
	$("#op-espectaculos").removeClass("activo")
	$("#op-entretenimiento").removeClass("activo")
	$("#op-inicio").removeClass("activo")
	$("#op-deportes").addClass("activo")


})


$("#op-espectaculos").on("click",function(){

	$("#bloque-inicio").removeClass("show");
	$("#bloque-deportes").removeClass("show");
	$("#bloque-espectaculos").removeClass("show");
	$("#bloque-entretenimiento").removeClass("show");

	$("#bloque-espectaculos").addClass("show");

	$("#op-deportes").removeClass("activo")
	$("#op-espectaculos").removeClass("activo")
	$("#op-entretenimiento").removeClass("activo")
	$("#op-inicio").removeClass("activo")
	$("#op-espectaculos").addClass("activo")

})



$("#op-entretenimiento").on("click",function(){
	$("#bloque-inicio").removeClass("show");
	$("#bloque-deportes").removeClass("show");
	$("#bloque-espectaculos").removeClass("show");
	$("#bloque-entretenimiento").removeClass("show");
	
	$("#bloque-entretenimiento").addClass("show");

	$("#op-deportes").removeClass("activo")
	$("#op-espectaculos").removeClass("activo")
	$("#op-entretenimiento").removeClass("activo")
	$("#op-inicio").removeClass("activo")
	$("#op-entretenimiento").addClass("activo")


})


})