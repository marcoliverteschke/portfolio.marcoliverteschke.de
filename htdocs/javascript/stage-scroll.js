$(document).ready(function(){
	var stage_position_top = $('#stage').offset().top;
	var header_height = $('header[role="banner"]').outerHeight() + 16;
	var current_scroll_offset = 0;
	var adjust_stage_position = 0;
	
	$(window).scroll(function(){
		current_scroll_offset = $(document).scrollTop() + header_height;
		if(current_scroll_offset >= stage_position_top)
		{
			adjust_stage_position = current_scroll_offset - stage_position_top;
		} else {
			adjust_stage_position = 0;
		}
		$('#stage').css('top', adjust_stage_position + 'px');
	});
});