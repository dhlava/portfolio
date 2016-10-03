$(document).ready(function(){

	$('.enlarge').on('click',function(e){
		e.preventDefault();
        $(this).next('.modal').modal({
			overlayClose: true,
			opacity:80
		});	
	});
	
	
	$('.no-video .video').on('click', function(){
		$(this).removeClass('enlarge');
		$(this).attr('href',$(this).attr('id'));
	
	});	
});