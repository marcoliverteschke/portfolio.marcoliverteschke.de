function Gallery()
{
	this.id = '';
	this.label = '';
	this.images = [];
	this.target_selector = '';
	this.images_to_load = 0;
	this.images_loaded = 0;
	var _this = this;
	this.current_image = 0;
	
	this.init = function()
	{
		this.start_loading();
		this.images_to_load = this.images.length;
		for(var image_index in this.images)
		{
			$(this.target_selector).append('<img src="' + this.images[image_index] + '" />');
		}
		$(this.target_selector).find('img').on('load', function(){
			if(_this.image_loaded())
			{
				_this.add_controls();
				_this.show_image(_this.current_image);
				_this.end_loading();
			}
		});
	}
	
	this.show_image = function(index)
	{
		$(this.target_selector).find('img:visible').hide();
		$(this.target_selector).find('img').eq(index).fadeIn();
	}
	
	this.start_loading = function()
	{
		$(this.target_selector).append('<div class="gallery-loading">Lade Galerie</div>');
	}
	
	this.end_loading = function()
	{
		$('.gallery-loading').remove();
	}
	
	this.image_loaded = function()
	{
		this.images_loaded++;
		return this.images_to_load == this.images_loaded
	}
	
	this.add_controls = function()
	{
		$(this.target_selector).prepend('<a class="gallery-controls gallery-next" href="javascript:void(0);">&gt;</a>');
		$(this.target_selector).prepend('<a class="gallery-controls gallery-prev" href="javascript:void(0);">&lt;</a>');
		$(this.target_selector).find('.gallery-next').click(function(){
			_this.next_image();
		});
		$(this.target_selector).find('.gallery-prev').click(function(){
			_this.previous_image();
		});
	}
	
	this.next_image = function()
	{
		this.current_image++;
		if(this.current_image >= this.images.length)
		{
			this.current_image = 0;
		}
		this.show_image(this.current_image);
	}
	
	this.previous_image = function()
	{
		this.current_image--;
		if(this.current_image < 0)
		{
			this.current_image = this.images.length - 1;
		}
		this.show_image(this.current_image);
	}
	
	this.destroy = function()
	{
		$(this.target_selector).find('img,a,div').remove();
	}
}