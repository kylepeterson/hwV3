$(function() {
	//Stops the carousel from progressing if on hte last slide
	$('#pizza-carousel').on('slid', '', function() {
	  	if($('.carousel-inner .item:last').hasClass('active')) {
	    	$(this).carousel('pause');
	  	}
	});
});