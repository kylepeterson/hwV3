// On Document Ready
$(function() {
	populatePizzas();
	populateDrinks();
	populateDesserts();
});

function populatePizzas() {
	var instance;
	$.each(com.dawgpizza.menu.pizzas, function() {
    	instance = $('.pizzas .template').clone();
    	instance.find('.name').html(this.name);
       	instance.find('.description').html(this.description);
    	instance.find('.prices').html('$' + this.prices[0] + '/$' + this.prices[1] + '/$' + this.prices[2]);
    	instance.removeClass('template');
    	if(this.vegetarian) {
	    	$('.veggie-list').append(instance);
    	}
	    else {
	    	$('.meat-list').append(instance);
	    }
	});
}

function populateDrinks() {
	var instance;
	$.each(com.dawgpizza.menu.drinks, function() {
    	instance = $('.drinks-and-dessert .template').clone();
    	instance.find('.name').html(this.name);
    	instance.find('.prices').html('$' + this.price);
    	instance.removeClass('template');
	    $('.drinks').append(instance);
	});
}

function populateDesserts() {
	var instance;
	$.each(com.dawgpizza.menu.desserts, function() {
    	instance = $('.drinks-and-dessert .template').clone();
    	instance.find('.name').html(this.name);
    	instance.find('.prices').html('$' + this.price);
    	instance.removeClass('template');
	    $('.desserts').append(instance);
	});
}