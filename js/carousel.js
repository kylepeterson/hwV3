$(function() {
	//Stops the carousel from progressing if on hte last slide
	$('#pizza-carousel').on('slide.bs.carousel', function() {
  		var $this = $(this);

  		if($('.carousel-inner .item:first').hasClass('active')) {
    		$this.children('.left').hide();
  		} else if($('.carousel-inner .item:last').hasClass('active')) {
    		$this.children('.right').hide();
  		} else {
    		$this.children('.carousel-control').show();
  		}

	});
});