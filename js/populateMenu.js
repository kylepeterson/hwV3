$(function() {
	populatePizzas();
});

function populatePizzas() {
	var i;
	var pizza;
	var instance;
	for (i = 0; i < com.dawgpizza.menu.pizzas.length; i++) {
    	pizza = com.dawgpizza.menu.pizzas[i];/*
    	instance = $('.pizza').clone();
    	instance.find('.name').html(pizza.name);
       	instance.find('.description').html(pizza.description);
    	instance.find('.prices').html('$' + pizza.prices[0] + '/$' + pizza.prices[1] + '/$' + pizza.prices[2]);
    	instance.removeClass('template');*/
    	var name = $(document.createElement('dt'))
    	name.html(pizza.name);
    	var description = $(document.createElement('dd'));
    	description.html(pizza.description);
    	var prices = $(document.createElement('dd'));
    	prices.html('$' + pizza.prices[0] + '/$' + pizza.prices[1] + '/$' + pizza.prices[2]);
    	$('.meat-list').append(name);
    	$('.meat-list').append(description);
    	$('.meat-list').append(prices);



	} //for each pizza
}