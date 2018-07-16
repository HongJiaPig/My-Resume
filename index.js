$(function(){
	console.log('document is loading');
	var menu_Width = $('nav .menu').outerWidth();
	$('nav .hamburger').click(function(){
		if( $(this).hasClass('is-active') ){
			$(this).removeClass('is-active').css('transform','');
			$(this).parent().removeClass('isShow');
			$('main article').css('transform','');
		}
		else{
			$(this).addClass('is-active').css('transform','translateX('+menu_Width+'px)');
			$(this).parent().addClass('isShow');
			$('main article').css('transform','translateX('+menu_Width+'px)');
		}
		console.log(menu_Width);
	});
	$('img').imagesLoaded(function(){
		setTimeout(function(){
			$('.loading').fadeOut(400);
		},500);
	})
});