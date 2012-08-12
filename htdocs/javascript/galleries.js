var current_gallery = null;
var current_gallery_id = '';

$(document).ready(function(){
	if($('[data-gallery]').length > 0)
	{
		// load first gallery
		current_gallery_id = $('[data-gallery]:first').attr('data-gallery');
		init_current_gallery();
		// load other gallery on click
		
		$('[data-gallery]').click(function(){
			if($(this).attr('data-gallery') != current_gallery.id)
			{
				current_gallery.destroy();
				current_gallery_id = $(this).attr('data-gallery');
				init_current_gallery();
			}
		});
	}
});

function init_current_gallery()
{
	current_gallery = new Gallery();
	current_gallery.id = current_gallery_id;
	current_gallery.label = galleries_config[current_gallery_id].label;
	current_gallery.images = galleries_config[current_gallery_id].images;
	current_gallery.target_selector = '#stage';
	current_gallery.init();
}