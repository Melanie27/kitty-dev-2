var ShopSupplyForm = Backbone.View.extend({

	template: Handlebars.compile(
		'<form class="form-horizontal">' +
			'<fieldset>' +
				'<legend>New Menu Item</legend>' +
				'<div class="control-group">' +
					'<input type="text" name="name" placeholder="Name" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="price" placeholder="Price" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="keyword" placeholder="Keyword" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="url" placeholder="URL" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="imagepathsm" placeholder="Path to image" />' +
				'</div>' +
				'<button type="button" class="btn btn-danger">Cancel</button>' +
				'<button type="button" class="btn btn-primary">Save</button>' +
			'</fieldset>' +
		'</form>'
	),

	

	render: function  () {
		this.$el.html(this.template());
		this.delegateEvents({
			'click .btn-primary' : 'save'
		});

		return this;
	},

	save: function() {
		this.setModelData();

		//model attributes will be encoded as JSON and sent to server as a post request
		this.model.save(this.model.attributes,
			{
				success: function (model) {
					app.shopSupplies.add(model);
					app.navigate('kitty-supplies/' + model.get('url'), {trigger: true});
				}
			}
		);
	},

	setModelData: function  () {
		this.model.set({
			name: this.$el.find('input[name="name"]').val(),
			price: this.$el.find('input[name="price"]').val(),
			keyword: this.$el.find('input[name="keyword"]').val(),
			id: null,
			url: this.$el.find('input[name="url"]').val(),
			imagepathsm: this.$el.find('input[name="imagepathsm"]').val()
		});
	}

});