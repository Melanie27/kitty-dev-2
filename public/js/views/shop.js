var ShopView = Backbone.View.extend({

	template: Handlebars.compile (
		'<ul class="products">' +
		'{{#each models}}' +
		'<li class="divide"><a href="#/kitty-supplies/{{attributes.id}}">{{attributes.name}}</a></li>' +
		'<span>{{attributes.price}}</span><br/>'+
		'<img src="photos/kitty-store/{{attributes.imagepathsm}}" class="img-polaroid small" />' +
		'<div><a href="#/cart/{{attributes.id}}" class="add-cart">Add to Cart</a></div>' +
		
		'<form class="form-horizontal">' +
			'<fieldset>' +
				'<legend>Choose Quantity</legend>' +
				'<div class="control-group">' +
					'<input type="text" name="quantity" placeholder="Quantity" />' +
				'</div>' +
				
				'<button type="button" class="btn btn-primary">Add</button>' +
			'</fieldset>' +
		'</form>' +

		'{{/each}}' +
		'</ul>' +
		'<ul class="cart-counter">' +
		'<li><a href="#">Go to Cart</a></li>' +
		'<li><a href="#">Items in Cart: <span class="counter"></span></a></li>' +
		'</ul>'
	),

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
		count= 0;
		//add item to the cart
		this.delegateEvents({
			'click .btn-primary' : 'add',
			
		});
	},

	add: function() {
		
		count++;
		$('.counter').html(count);
		this.setModelData();
	},

	setModelData: function () {
		var me = this.collection.models
		//console.log(me);
		
		var mes = app.shopSupplies.toJSON();
		//console.log(mes);

		/*this.model.set({
			quantity: this.$el.find('input[name="quantity"]').val()
			//console.log(quantity);
		});*/
	},

	render: function () {
		//expecting an array
		this.$el.html(this.template(this.collection));
		return this;
	}
});