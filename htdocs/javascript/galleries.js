var current_gallery = null;
var current_gallery_id = '';

$(document).ready(function(){
	if($('[data-gallery]').length > 0)
	{
		make_galleries_clackable();
		// load first gallery
		load_current_gallery_id();
		init_current_gallery();
		// load other gallery on click
		
		$('[data-gallery]').click(function(){
			if($(this).attr('data-gallery') != current_gallery.id && ($(this).attr('data-gallery') in galleries_config))
			{
				current_gallery.destroy();
				current_gallery_id = $(this).attr('data-gallery');
				init_current_gallery();
			}
		});
	}
});

function make_galleries_clackable()
{
	$('[data-gallery]').each(function(i, e){
		if($(e).attr('data-gallery') in galleries_config)
		{
			$(e).addClass('has-images');
		} else {
			$(e).addClass('has-no-images');
		}
	});
}

function load_current_gallery_id()
{
	$('[data-gallery]').each(function(i, e){
		if($(e).attr('data-gallery') in galleries_config)
		{
			current_gallery_id = $(e).attr('data-gallery');
			return false;
		}
	});
}

function init_current_gallery()
{
	current_gallery = new Gallery();
	current_gallery.id = current_gallery_id;
	current_gallery.label = galleries_config[current_gallery_id].label;
	current_gallery.images = galleries_config[current_gallery_id].images;
	current_gallery.target_selector = '.stage';
	current_gallery.init();
}