var ShopSupplies = Backbone.Collection.extend({
	comparator: 'name',
	//define the model
	model: ShopSupply,
	url: '/supplies'
});