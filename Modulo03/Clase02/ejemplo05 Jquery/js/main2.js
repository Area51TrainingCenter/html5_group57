$(function(){

	$(".opciones").on("click",function(){
		$(".opciones").removeClass("activo");
		$(this).addClass("activo");
		var seccion=$(this).data("bloque");
		$(".block").removeClass("show");
		$("#bloque-"+seccion).addClass("show");

	})


})