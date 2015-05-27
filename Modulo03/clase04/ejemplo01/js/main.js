$(function(){

	$(".op-seccion").click(function(event){
		 event.preventDefault();
		 var url=$(this).attr("data-seccion");
		$(".noticias").load(url);

	})


})