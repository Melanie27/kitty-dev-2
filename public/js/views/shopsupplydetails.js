var ShopSupplyDetails = Backbone.View.extend({

	template: Handlebars.compile(
	
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{description}}</span></p>' +
		'<img src="photos/kitty-store/{{imagepathsm}}" class="img-polaroid" />' +
		'<p><span class="label">{{keyword}}</span></p>' +
		'</div>' +
		'<p></p>' +
		'<button type="button" class="btn btn-danger confirm-delete">Delete</button>'

		),

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	deleteItem: function () {
		this.model.destroy(
			{
				success: function (model) {
					app.shopSupplies.remove(model.get('id'));
					app.navigate("", {trigger: true});
				}
			}
		);
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		this.delegateEvents({
			'click .btn-danger': 'deleteItem'
		});
		return this;
	}

});