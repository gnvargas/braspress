$(document).ready(function(){
	
	// ----------- Funcao Ascende e apaga a Luz - http://www.maujor.com/blog/2009/07/29/efeito-apagar-as-luzes/ -------------
	$('.light').css('height', $(document).height()).hide();
	
	$('.btn_light').click(function(e) {
		
		e.preventDefault();
		
		$('.light').toggle();
		
		if ($('.light').is(':hidden')) {
			$(this).parent().find('.btn_light').removeClass('active');
		} else {
			$(this).parent().find('.btn_light').addClass('active');
		}
	});


	// ----------- Plugin AUDIO HTML5 - http://mediaelementjs.com/ -------------
	$('audio').mediaelementplayer({
		audioWidth: '100%',
		audioHeight: 30
	});

	$('.btn_audio').click(function(e) {

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.global_video').show();
			$('.content_audio').slideUp();
		} else {
			$(this).addClass('active');
			$('.global_video').hide();
			$('.content_audio').slideDown();
		}
		
		
	});

});
