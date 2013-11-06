// On Document Ready
$(function() {
	populatePizzas();
});

function populatePizzas() {
	var i;
	var pizza;
	var instance;
	for (i = 0; i < com.dawgpizza.menu.pizzas.length; i++) {
    	pizza = com.dawgpizza.menu.pizzas[i];
    	instance = $('.pizza').clone();
    	instance.find('.name').html(pizza.name);
       	instance.find('.description').html(pizza.description);
    	instance.find('.prices').html('$' + pizza.prices[0] + '/$' + pizza.prices[1] + '/$' + pizza.prices[2]);
    	instance.removeClass('template');
    	if(pizza.vegetarian)
	    	$('.veggie-list').append(instance);
	    else
	    	$('.meat-list').append(instance);
	}
}