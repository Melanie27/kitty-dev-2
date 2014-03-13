var CartView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>Shopping Cart</h1>' +
		'{{#each models}}' +
		'<h2>{{attributes.name}}</h2>' +
		'<h3>{{attributes.price}}</h3>' +
		'<img src="photos/kitty-store/{{attributes.imagepathsm}}" class="img-polaroid" />' +
		'{{/each}}'
	),

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}
});