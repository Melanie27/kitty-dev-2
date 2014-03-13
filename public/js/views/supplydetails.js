var ShopSupplyDetails = Backbone.View.extend({

	render: function() {
		'<div>' +
		'<h1> + this.options.name + </h1>' +
		'<p><span class="label">{{description}}</span></p>' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'<p><span class="label">{{keyword}}</span></p>' +
		'</div>';

		this.$el.html(markup);
		return this;
	}

});