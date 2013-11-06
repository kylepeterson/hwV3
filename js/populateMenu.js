// On Document Ready
$(function() {
	populatePizzas();
});

function populatePizzas() {
	var instance;
	$.each(com.dawgpizza.menu.pizzas, function() {
    	instance = $('.pizza').clone();
    	instance.find('.name').html(this.name);
       	instance.find('.description').html(this.description);
    	instance.find('.prices').html('$' + this.prices[0] + '/$' + this.prices[1] + '/$' + this.prices[2]);
    	instance.removeClass('template');
    	if(pizza.vegetarian) {
	    	$('.veggie-list').append(instance);
    	}
	    else {
	    	$('.meat-list').append(instance);
	    }
	});
}